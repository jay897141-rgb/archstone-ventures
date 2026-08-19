# Brand Asset Sources (not shipped to production)

This folder is OUTSIDE `public/`, deliberately — Vite copies everything
under `public/` verbatim into the production build, and these originals
(1.9MB+ combined, largest at 8000px wide) are far too large to ship to
visitors. The actual web-optimized files derived from these live in
`public/assets/brand/`.

## What's here

The 6 official files as supplied, unmodified:

| File | Content | Background |
|---|---|---|
| `Archstone_Ventures_Logo.png` | Icon only | Black |
| `Archstone_Ventures_Gold_Only.png` | Icon only | White |
| `Archstone_Ventures_Gold.png` | Icon + wordmark + tagline (stacked) | Black |
| `Archstone_Ventures_Side.png` | Icon + wordmark + tagline (horizontal) | White |
| `Archstone_Ventures_Gold_Side.png` | Icon + wordmark + tagline (horizontal) | Black |
| `WhatsApp_Image_2026-08-19_at_10_31_14_AM.jpeg` | Same as Gold.png, WhatsApp-compressed | White |

Note: despite the `.png` filenames, all of these are actually flattened
JPEGs (confirmed via `file` and PIL — JFIF headers, RGB mode, no alpha
channel). None have real transparency.

A 7th file, `WhatsApp_Video_2026-08-19_at_10_30_45_AM.mp4` (~160MB), was
also supplied but is not duplicated here — it's still exactly where you
uploaded it from. Not processed or wired into the site this pass (out of
scope for the logo integration task); revisit separately once there's a
concrete plan for where a video would be used (e.g. an optional Hero
background video), including a compressed/optimized version and a
mobile fallback.

## Why the footer doesn't use the full logo lockup

Every "black background" file was checked pixel-by-pixel (not just
eyeballed) to see whether it was a genuine light-colored "for dark
backgrounds" variant. It isn't — the wordmark ink color is dark in every
supplied file (sampled brightest pixel along the wordmark in
`Archstone_Ventures_Gold.png`: RGB 8,10,9 — effectively black). The
black canvases appear to just be a flattening artifact, not an
intentional on-dark version with light text.

Using the full lockup on the dark footer would make the wordmark
unreadable — the same class of bug as invisible buttons on a dark
background. So the footer currently uses the icon alone (whose black
elements are meant to read as dark) next to the site's existing plain-
text wordmark, which is legible on dark. **If the brand/design team can
supply a genuine light-colored (white or gold) wordmark variant**, the
footer can switch to the full lockup exactly like the header — that's a
one-file swap in `src/data/brandConfig.js`, nothing else needs to change.

## What was derived from these, and how

See `public/assets/brand/` for the actual files used on the site:

- `logo-on-light.png` — from `Archstone_Ventures_Side.png`, resized from
  8000x1358 to 1767x300 (retina-safe for its ~48px display height) and
  palette-quantized (256 colors) for file size. 133.5KB → 53.7KB.
- `icon-on-dark.png` — from `Archstone_Ventures_Logo.png`, resized from
  8000x6544 to 318x260, same quantization. 19.2KB → 10.3KB.
- `favicon.png` — from `Archstone_Ventures_Gold_Only.png`, padded to a
  square canvas with the same white already in the source (not a new
  color), resized to 512x512, same quantization. 39.8KB → 18.5KB.

No cropping, recoloring, or redrawing of the artwork itself — every
processing step was resize and/or canvas-pad only, verified by visual
inspection after each step.
