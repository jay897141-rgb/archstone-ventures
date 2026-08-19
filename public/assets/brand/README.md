# Brand Assets (production — shipped with the site)

The official Archstone Ventures assets are integrated and live:

| File | Used for |
|---|---|
| `logo-on-light.png` | Header — full lockup (icon + wordmark + tagline) |
| `icon-on-dark.png` | Footer — icon only, paired with text (see note below) |
| `favicon.png` | Browser tab / mobile compact branding |

Controlled from `src/data/brandConfig.js` — that's the only file that
needs to change if these are swapped for updated versions later.

## Known limitation: footer doesn't use the full lockup

No supplied file has a light-colored (white/gold) wordmark — every
variant's text is dark ink, verified by pixel sampling, even the ones
flattened onto a black canvas. So the footer uses the icon alone next
to the site's existing plain-text wordmark (which is legible on the
dark footer), rather than the full lockup image. Full technical
reasoning and source-file breakdown: `../../brand-assets-source/README.md`
(one level up, outside `public/` since those originals are too large to
ship to production).

If the brand/design team produces a true light-wordmark variant, the
footer can switch to it — add the path to `brandConfig.logo.dark` in
`src/data/brandConfig.js`, no component changes needed.
