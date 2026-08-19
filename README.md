# Archstone Ventures — Marketing Website

A premium marketing site for Archstone Ventures (property, architecture,
construction — Bengaluru), built React + Vite frontend and a Python
FastAPI enquiry/lead backend. This is a separate codebase from Archstone's
internal management application — do not merge the two.

---

## 1. Sandbox / build disclosure (read this first)

This project was written in an offline sandbox with **no outbound network
access** — `npm install`, `pip install`, and an actual `vite`/`uvicorn`
run were not possible there. What *was* done in the sandbox, using tools
already present locally:

- Every `.jsx`/`.js` file passed an individual syntax check
- The **entire frontend was bundled end-to-end** (all ~40 files, all
  imports, all JSX) using a locally available `esbuild` binary with stub
  packages standing in for `react`/`react-dom`/`react-router-dom` — this
  confirms every import path and all JSX syntax is correct, but it is
  **not** the same as a real `npm run build`
- All CSS files were parsed and are free of syntax errors
- The Python backend was byte-compiled (`py_compile`) with no errors

**None of this is a substitute for actually running `npm install`,
`npm run dev`, `npm run build`, and `uvicorn` yourself.** Do that before
treating this as production-ready. The commands below are exactly what
to run.

---

## 2. Prerequisites

Install these before following the setup steps below:

- **Node.js 18 or newer** (includes npm) — https://nodejs.org
- **Python 3.11 or newer** — https://www.python.org/downloads/windows/
  (make sure "Add python.exe to PATH" is checked during install)
- **Git** (optional, only if you're cloning/versioning this rather than
  just unzipping it)
- **MongoDB** — optional. Only needed if you want enquiries persisted to
  a real database instead of the in-memory dev fallback (see §4).

---

## 3. Project structure

```
archstone-ventures/
├── index.html
├── package.json / vite.config.js
├── .env.example              -> copy to .env.local for VITE_API_URL
├── public/                   -> robots.txt, sitemap.xml, assets/brand/
├── src/
│   ├── components/           -> Header, Footer, EnquiryForm, etc.
│   ├── sections/              -> homepage sections (Hero, TwoWorlds, ...)
│   ├── pages/                 -> About, Properties, Construction, ...
│   ├── layouts/SiteLayout.jsx
│   ├── data/                  -> siteConfig.js, projects.js, testimonials.js...
│   ├── hooks/
│   └── styles/                -> tokens.css (design system), global.css
└── backend/
    ├── app/
    │   ├── main.py             -> FastAPI app, POST /api/enquiries
    │   ├── models.py           -> Pydantic validation
    │   └── db.py                -> Mongo (motor) or in-memory dev fallback
    ├── requirements.txt
    └── .env.example
```

---

## 4. Frontend — Windows setup

Open a terminal (PowerShell or cmd) in the project root:

```
npm install
npm run dev
```

This starts Vite's dev server, by default at http://localhost:5173

For a production build:

```
npm run build
npm run preview
```

`npm run build` outputs static files to `dist/`. GitHub Actions deploys this
folder to GitHub Pages whenever `main` receives a push.

### GitHub Pages deployment

The initial project URL is expected to be:

```
https://USERNAME.github.io/archstone-ventures/
```

Vite uses `/archstone-ventures/` by default and React Router uses the same
basename. When the official custom domain is connected, set
`VITE_BASE_PATH=/` in the GitHub Actions build environment and configure the
domain in the repository's Pages settings. No DNS configuration is included
here.

### Frontend to backend API configuration

`EnquiryForm.jsx` calls the API using:

```js
const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000'
```

To point it at your backend:

1. Copy `.env.example` to `.env.local` in the project root (already
   git-ignored):
   ```
   copy .env.example .env.local
   ```
2. Edit `.env.local` and set:
   ```
   VITE_API_URL=http://localhost:8000
   ```
   (or your deployed API's URL, e.g. https://api.archstoneventures.in)
3. Restart `npm run dev` after changing `.env.local` — Vite only reads
   env files at server start.

---

## 5. Backend — Windows setup

Open a **second** terminal, in `backend/`:

```
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

The API will be live at http://localhost:8000. Check it with:

```
http://localhost:8000/health
```

### Database configuration (MongoDB) — optional, modular

The backend runs in two modes, controlled entirely by one environment
variable:

- **`MONGODB_URI` not set -> DEV MODE.** Enquiries are validated and
  accepted, but held only in a process-local in-memory list. Nothing is
  silently dropped, and every API response is explicit about this
  (`"persisted": false`). This was the only mode testable in the sandbox
  (no MongoDB driver could be installed/connected there).
- **`MONGODB_URI` set -> persisted to MongoDB** via the `motor` async
  driver. On startup the app pings the database; if the ping fails for
  any reason, it logs a warning and falls back to dev mode rather than
  pretending to be connected.

To enable real persistence:

```
copy backend\.env.example backend\.env
```

Edit `backend\.env`:

```
MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>/  (or mongodb://localhost:27017)
MONGODB_DB=archstone
MONGODB_COLLECTION=enquiries
ALLOWED_ORIGINS=http://localhost:5173
```

`db.py` isolates all persistence logic — swapping MongoDB for another
store later only means editing that one file.

---

## 6. Enquiry API details

### `POST /api/enquiries`

Request body (JSON):

```json
{
  "name": "string, required",
  "phone": "string, required, 6-20 chars",
  "email": "string, required, valid email",
  "requirement_type": "Property | Construction | Architecture | Interiors | Investment | Other",
  "location": "string, optional",
  "budget_range": "string, optional",
  "message": "string, optional, up to 2000 chars",
  "preferred_contact": "Phone | Email | WhatsApp",
  "schedule_site_visit": true,
  "consent": true,
  "source": "website"
}
```

- `consent` must be `true` or the request is rejected with `422` — this
  mirrors the required consent checkbox in `EnquiryForm.jsx`.
- `requirement_type` and `preferred_contact` values outside the allowed
  lists are safely coerced to `"Other"` / `"Phone"` rather than causing
  an error.
- Any other validation failure (missing name/phone/email, malformed
  email, etc.) returns `422` with FastAPI's standard validation-error
  body.

Success response (`201`):

```json
{
  "id": "uuid-string",
  "name": "string",
  "requirement_type": "string",
  "created_at": "2026-08-18T12:00:00+00:00",
  "persisted": false
}
```

`"persisted": false` means MongoDB is not configured and the enquiry was
only held in memory for this server process (see §5's dev-mode
explanation) — this is a deliberate, honest signal, not a bug.

### `GET /health`

Returns `{"status": "ok", "persisted_storage": true|false}` — useful for
confirming which mode the backend is running in.

### `GET /api/enquiries/_dev-snapshot`

Dev-only convenience endpoint that lists in-memory enquiries. It returns
`404` automatically once `MONGODB_URI` is configured, so it can never
expose real lead data in production.

---

## 7. Production deployment notes

This was built and statically checked in an offline sandbox — nothing
below has been deployed or tested against a live server. Treat it as a
checklist, not a confirmation.

**Frontend**
- `npm run build` produces static files in `dist/` — deployable to any
  static host (Netlify, Vercel, S3 + CloudFront, Nginx, etc.). No
  Node.js server is required to serve the built frontend.
- Set `VITE_API_URL` to the backend's real public URL (e.g.
  `https://api.archstoneventures.in`) as a build-time environment
  variable on whichever platform builds the site — Vite bakes it into
  the build output, it isn't read at runtime in the browser.

**Backend**
- Run behind a process manager, not `--reload`: e.g.
  `uvicorn app.main:app --host 0.0.0.0 --port 8000 --workers 2`,
  supervised by systemd, Docker, or a platform like Render/Railway/Azure
  App Service.
- Put a reverse proxy (Nginx, Caddy, or the hosting platform's own
  layer) in front for HTTPS — FastAPI/uvicorn don't terminate TLS
  themselves here.
- Set `ALLOWED_ORIGINS` to the real deployed frontend domain(s), not
  `localhost` — the current default only works for local dev.
- Set `MONGODB_URI` (and rotate credentials out of `.env` — use your
  platform's secret manager, never commit `.env`).
- `.env` is already covered by `.gitignore` in both the root and
  `backend/` — keep it that way.

---

## 8. Content that still needs verified data before launch

Every placeholder below is explicitly flagged in code (`devPlaceholder`
flags in `src/data/*.js`, or `[bracketed]` copy) so it cannot be mistaken
for real content:

- **Photography / imagery — two-tier system.** As of the visual
  transformation pass, there are two distinct treatments, and they must
  stay distinct:
  - `ArchArtwork.jsx` — original, hand-built inline SVG illustrations
    (line-art elevations, floor plans, site plans, material studies)
    used on brand/concept sections (Hero, Two Worlds, About, Architecture,
    Construction, Interiors). These are abstract by design — not photos,
    not depictions of a specific building — so they can never be mistaken
    for a real, verified Archstone project. Each is captioned
    "Illustrative" or "Artist's impression." Replace with licensed or
    commissioned photography before launch; keep the `ratio` prop's
    sizing pattern so layout doesn't shift.
  - `ImagePlaceholder.jsx` — the honest "pending" hatch panel, used ONLY
    where the underlying content itself is an unverified specific
    project, listing, or testimonial (Featured Projects, Projects
    listing/detail, Properties, the map embed on Contact). Do not
    replace these with polished artwork — doing so would visually imply
    a specific unverified project is real and complete. Replace only
    once the underlying project/listing data itself is verified, at
    which point it becomes real photography, not illustration.
  - When real photography is added anywhere, lazy-load anything below
    the fold (see the comment in `ImagePlaceholder.jsx`).
- **Projects** (`src/data/projects.js`) — two entries reference real
  locations mentioned on archstoneventures.in (KR Puram, Old Airport
  Road), but type/status/area/description were not published there and
  are marked as placeholders. A third project is a fully fabricated
  placeholder slot. Replace all three with verified project data.
- **Testimonials** (`src/data/testimonials.js`) — one entry ("Arvind") is
  a genuine, named testimonial from archstoneventures.in, rewritten in
  Archstone's new voice. The other two are explicit placeholders — do not
  publish them as real client quotes.
- **Properties** (`src/data/properties.js`) — no real inventory feed
  exists yet; every listing is a structural placeholder.
- **Office address** (`src/data/siteConfig.js`) — the exact registered
  office address was not published on the live site and is left as a
  placeholder string, not invented.
- **Client Login** — `siteConfig.clientLoginUrl` is `'#'` intentionally.
  Point it at the real internal-application URL once available; do not
  merge that codebase into this one.

Phone numbers, email, and social links in `siteConfig.js` were confirmed
directly from archstoneventures.in and should be correct as-is.

---

## 9. SEO

- Per-page `<title>` and meta description via `components/SEO.jsx`
- OpenGraph + Twitter card tags in `index.html` — `og:image` now uses the
  real official icon (`/assets/brand/favicon.png`) as an interim image;
  social previews really want a 1200x630 landscape cover photo though,
  not a square icon — swap that in once available.
- `public/robots.txt` and `public/sitemap.xml` (update the sitemap as
  pages are added or URLs change)
- Semantic headings (h1/h2/h3) throughout every page
- Header uses the real official Archstone Ventures logo (integrated —
  see `public/assets/brand/README.md`). Footer uses the real icon +
  text wordmark rather than a full lockup image — see that same README
  for why (no light-colored wordmark variant was supplied).

---

## 10. Responsive

Layouts are mobile-first (single-column CSS Grid by default, additional
columns only added at min-width breakpoints), all typography uses
clamp()-based fluid scales, no fixed pixel widths beyond small UI
details (icons, index numerals), and overflow-wrap / overflow-x: hidden
guards are in place globally. This was checked statically (no
fixed-width or 100vw rules found) but has **not** been visually verified
in an actual browser — do that at 1440 / 1280 / 1024 / 768 / 430 / 390 /
375px before launch.
