import './image-placeholder.css'

/**
 * Renders in place of real photography. Styled as a drafting hatch panel
 * (the diagonal-line fill architects use on a plan to denote a void or an
 * unresolved material) rather than a broken-looking grey box — so the
 * structure reads as intentional while assets are pending.
 *
 * PERFORMANCE NOTE FOR WHEN REAL PHOTOGRAPHY IS ADDED: keep the
 * `aspectRatio` sizing pattern used here (set on the container, not the
 * <img>) so real <img> tags can use `loading="lazy"` and `decoding="async"`
 * without causing layout shift. Below-the-fold sections (FeaturedProjects,
 * DesignSection, CaseStudy, project galleries, etc.) should lazy-load;
 * only the Hero image should load eagerly.
 */
export default function ImagePlaceholder({
  label = 'IMAGE PENDING',
  ratio = '4 / 3',
  frame = true,
  className = '',
}) {
  return (
    <div
      className={`img-placeholder ${frame ? 'corner-frame' : ''} ${className}`}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={label}
    >
      <span className="ref-tag img-placeholder__tag">{label}</span>
    </div>
  )
}
