// Verified facts sourced from https://www.archstoneventures.in/ on 2026-08-18.
// Only genuinely published details are used here. Anything not confirmed
// (street address, years active, project counts, certifications) is
// intentionally omitted rather than invented — fill in once verified.

export const siteConfig = {
  name: 'Archstone Ventures',
  tagline: 'Property. Design. Construction. One trusted journey.',
  phones: ['+91 88676 71166', '+91 99013 65907'],
  email: 'info@archstoneventures.in',
  city: 'Bengaluru, Karnataka',
  // NOTE: exact registered office address was not published on the live
  // site at time of writing — replace this placeholder once confirmed.
  addressPlaceholder: 'Office address to be confirmed — Bengaluru, Karnataka',
  social: {
    instagram: 'https://www.instagram.com/archstoneventures/',
    facebook: 'https://www.facebook.com/archstoneventures/',
    twitter: 'https://twitter.com/ArchstoneVenBlr',
  },
  clientLoginUrl: '#', // Intentionally unlinked — points to the separate
  // internal management application once that URL is provided. Do not
  // merge that codebase into this marketing site.
}

export const primaryNav = [
  { label: 'About', to: '/about' },
  { label: 'Properties', to: '/properties' },
  { label: 'Construction', to: '/construction' },
  { label: 'Architecture', to: '/architecture' },
  { label: 'Interiors', to: '/interiors' },
  { label: 'Projects', to: '/projects' },
  { label: 'Our Process', to: '/process' },
  { label: 'Contact', to: '/contact' },
]

export const footerNav = {
  company: [
    { label: 'About', to: '/about' },
    { label: 'Our Process', to: '/process' },
    { label: 'Contact', to: '/contact' },
  ],
  services: [
    { label: 'Properties', to: '/properties' },
    { label: 'Construction', to: '/construction' },
    { label: 'Architecture', to: '/architecture' },
    { label: 'Interiors', to: '/interiors' },
  ],
  projects: [
    { label: 'All Projects', to: '/projects' },
  ],
  legal: [
    { label: 'Privacy', to: '/privacy' },
    { label: 'Terms', to: '/terms' },
  ],
}
