# Media Source (not shipped to production)

Like `brand-assets-source/`, this folder is deliberately OUTSIDE `public/`
— the original master video is 160MB and must never reach a visitor's
browser. The actual web-delivered files derived from it live under
`public/assets/videos/`, `public/assets/hero/`, and `public/assets/stills/`.

## What's here

`archstone-master-video.mp4` — a byte-for-byte copy of the supplied
master (verified via matching MD5 checksum: `e7d2e868debb3a78b226516833ea63bb`).
Untouched. 4K (3840x2160), 102.875s, H.264, ~160MB, no audio track issues
noted. Content, in order: a continuous drone descent over a completed
residence (0.0s–~12.4s, no cuts), an entrance/lattice detail shot,
interior walkthrough (staircase/living, kitchen, primary bathroom), and
a branded blueprint-style logo outro animation near the very end.

**This footage has NOT been associated with a named project** (not KR
Puram Residence, not Old Airport Road Residence, not any other project
in `src/data/projects.js`) — that identity hasn't been confirmed, so
nothing in the code claims it. It's used only as generic, unattributed
brand imagery on the homepage Hero, which doesn't name a specific
project either.

## Hero loop — how it was built

Requirement was an 8–15s loop with no abrupt cuts. The master's opening
drone shot runs continuously from 0.0s to ~12.4s (verified frame-by-frame
around the 11–15s mark to find the exact cut point) — a single
unbroken take, so there was no need to blend across a real cut.

Technique: **boomerang loop**. Took the first 6.5s of that shot, made a
reversed copy, and concatenated forward+reverse for a 13s loop where the
last frame is identical to the first (verified: extracted both frames by
exact frame index and diffed them — mean pixel difference 2.6/255, i.e.
just JPEG re-encode noise, confirming a genuinely seamless seam, not an
approximate one).

Encoded directly from the pristine master in a single ffmpeg pass
(trim → scale → reverse → concat → encode) to avoid any generation loss
from an intermediate re-encode.

| File | Codec | Resolution | Duration | Size |
|---|---|---|---|---|
| `hero-loop.mp4` | H.264 (CRF 27) | 1920x1080 | 13s | 8.1MB |
| `hero-loop.webm` | VP9 (CRF 40) | 1920x1080 | 13s | 8.0MB |

Both a ~20x reduction from the 160MB master, no audio track, `faststart`
enabled on the MP4 for progressive playback.

## Poster + stills

`hero-poster.{jpg,webp,avif}` — the exact frame the loop starts and ends
on (frame 0 of the master, scaled to 1920x1080), so there's a seamless
visual handoff between the static poster and the video starting to play.

Five stills extracted per the brief's categories, at full quality from
the master, then exported as WebP + AVIF:

| Category | Timestamp | Notes |
|---|---|---|
| Exterior/drone | 8.0s | Front-elevation reveal, mid-descent |
| Living/staircase | 25.0s | |
| Kitchen | 50.0s | |
| Bathroom | 75.0s | Primary bath, freestanding tub |
| Architectural/detail | 13.0s | Entrance jaali/lattice screen |

All at 1920x1080, `public/assets/stills/`.
