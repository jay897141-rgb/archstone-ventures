import { projects } from './projects'

// Properties currently share the verified project record until a live
// property feed is connected. Unknown commercial fields stay empty so the
// UI cannot imply availability, pricing, type, or project measurements.
export const properties = projects.map((project) => ({
  ...project,
  images: [],
  highlights: [],
  overview: project.summary,
  coordinates: null,
}))

export const propertyFilters = {
  locations: [...new Set(properties.map((property) => property.location))],
}
