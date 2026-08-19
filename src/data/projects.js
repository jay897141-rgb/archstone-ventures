// Two locations below (KR Puram, Old Airport Road) are genuinely referenced
// on https://www.archstoneventures.in/, so the NAME and LOCATION fields are
// verified. Type, status, and area were never published there — rather than
// guess, those fields are left null and the UI renders an honest
// "pending confirmation" fallback instead of asserting a completion status
// or property type that was never confirmed.
//
// No third project is listed here. A previous draft included a fabricated
// placeholder entry ("[Project Name — TBD]"); it has been removed rather
// than shown to visitors, per the rule that unverified/fabricated project
// entries must not reach production-facing pages. Add a real project here
// only once one is verified — do not re-add a placeholder slot.

export const projects = [
  {
    slug: 'kr-puram-residence',
    name: 'KR Puram Residence',
    location: 'KR Puram, Bengaluru',
    type: null, // not published on the live site — do not guess
    status: null, // not published on the live site — do not guess
    area: null,
    summary: 'A ground-up residential build coordinated end to end, from design through handover.',
    devPlaceholder: true,
  },
  {
    slug: 'old-airport-road-residence',
    name: 'Old Airport Road Residence',
    location: 'Old Airport Road, Bengaluru',
    type: null,
    status: null,
    area: null,
    summary: 'A full construction and interiors engagement executed under a single coordinated team.',
    devPlaceholder: true,
  },
]
