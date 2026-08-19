// ============================================================================
// BRAND ASSET CONFIG — the ONLY place logo integration is controlled.
//
// STATUS: real official Archstone Ventures assets were supplied and are now
// wired in below. Source files (as supplied) were flattened JPEGs with no
// transparency, so exact placement was chosen deliberately per file:
//
//   - logo-on-light.png: the official horizontal lockup (icon + wordmark +
//     tagline) on its white background — used in the header, which sits on
//     the light limestone background. Resized from the 8000px source for
//     web delivery; not recolored, cropped, or redrawn.
//   - icon-on-dark.png: the official icon mark ONLY, on its black
//     background — used in the footer. IMPORTANT: the full lockup's
//     wordmark was checked pixel-by-pixel and confirmed to be rendered in
//     dark ink in every supplied file (even the "black background"
//     versions) — there is no supplied variant with a light-colored
//     wordmark. Using the full lockup on the dark footer would make the
//     wordmark unreadable, so the footer uses the icon alone (whose black
//     elements are meant to read as dark) paired with the site's existing
//     plain-text wordmark, which IS legible on dark. Flag this to the
//     brand/design team — a true light-wordmark variant would let the
//     footer use the full lockup like the header does.
//   - favicon.png: the official icon mark on white, padded to a square
//     canvas (same white already in the source, not new colour) and
//     resized to 512x512.
//
// All three PNGs were resized from oversized source files (multi-thousand
// pixel originals) to sensible web dimensions and palette-optimized for
// file size — no cropping, recoloring, or redrawing of the artwork itself.
// ============================================================================

export const brandConfig = {
  hasLogo: true,

  logo: {
    light: `${import.meta.env.BASE_URL}assets/brand/logo-on-light.png`,
    dark: null, // no light-wordmark variant was supplied — see note above
  },

  icon: {
    dark: `${import.meta.env.BASE_URL}assets/brand/icon-on-dark.png`, // icon-only, for the dark footer
  },

  favicon: `${import.meta.env.BASE_URL}assets/brand/favicon.png`,
}

