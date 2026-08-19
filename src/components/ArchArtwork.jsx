import './arch-artwork.css'

/**
 * ArchArtwork — original, hand-built inline SVG illustrations standing in
 * for real photography across brand/concept sections (hero, discipline
 * intros, page media). These are deliberately abstract architectural
 * line-art/renderings — not photos, and not depictions of any specific
 * real building — so they can never be mistaken for a real, verified
 * Archstone project. All colour comes from the existing design tokens.
 *
 * IMPORTANT — asset status: every variant here is a placeholder artwork,
 * not final brand photography. Before production launch, replace with
 * licensed/commissioned photography of real Archstone projects (see
 * README §8). Do NOT swap these for stock photos implying a specific
 * built project unless that project is verified.
 *
 * For anything that IS a specific (currently unverified) project, listing,
 * or testimonial, use <ImagePlaceholder> instead — its honest "pending"
 * label is the correct treatment there, not this illustration system.
 */
export default function ArchArtwork({ variant = 'elevation', label, frame = true, ratio, className = '' }) {
  return (
    <div
      className={`arch-artwork ${frame ? 'corner-frame' : ''} ${className}`}
      style={ratio ? { aspectRatio: ratio } : undefined}
    >
      {renderVariant(variant)}
      {label && <span className="ref-tag arch-artwork__tag">{label}</span>}
    </div>
  )
}

function renderVariant(variant) {
  switch (variant) {
    case 'hero':
      return <HeroScene />
    case 'siteplan':
      return <SitePlan />
    case 'elevation':
      return <Elevation />
    case 'blueprint':
      return <Blueprint />
    case 'execution':
      return <Execution />
    case 'material':
      return <Material />
    case 'coordination':
      return <Coordination />
    default:
      return <Elevation />
  }
}

/* ---------------------------------------------------------------------- */

function HeroScene() {
  return (
    <svg className="arch-artwork__svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMax slice" role="img" aria-label="Illustrated contemporary residence at dusk">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--ink)" />
          <stop offset="65%" stopColor="var(--brand-ink)" />
          <stop offset="100%" stopColor="var(--brass-deep)" />
        </linearGradient>
        <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--brand-charcoal)" />
          <stop offset="100%" stopColor="var(--brand-ink)" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="1600" height="1000" fill="url(#sky)" />
      <circle cx="1230" cy="230" r="120" fill="var(--brass-light)" opacity="0.18" />

      {/* distant tree line */}
      <g opacity="0.35" fill="var(--ink)">
        <circle cx="120" cy="560" r="70" />
        <circle cx="220" cy="580" r="55" />
        <circle cx="1500" cy="555" r="80" />
        <circle cx="1400" cy="590" r="50" />
      </g>

      {/* ground */}
      <rect x="0" y="620" width="1600" height="380" fill="url(#ground)" />

      {/* main residence massing */}
      <g>
        <rect x="420" y="430" width="760" height="230" fill="var(--brand-charcoal)" />
        <rect x="420" y="430" width="760" height="230" fill="none" stroke="var(--brass)" strokeOpacity="0.25" strokeWidth="1" />
        <rect x="330" y="560" width="300" height="100" fill="var(--brand-ink)" />
        <rect x="900" y="360" width="260" height="90" fill="var(--brand-charcoal)" />

        {/* window light grid */}
        <g fill="var(--brass-light)" opacity="0.85">
          <rect x="460" y="470" width="70" height="90" />
          <rect x="560" y="470" width="70" height="90" opacity="0.55" />
          <rect x="700" y="470" width="130" height="90" opacity="0.7" />
          <rect x="960" y="390" width="180" height="45" opacity="0.5" />
        </g>

        {/* roofline */}
        <rect x="400" y="415" width="800" height="16" fill="var(--ink)" />
        <rect x="880" y="345" width="300" height="16" fill="var(--ink)" />
      </g>

      {/* foreground landscaping */}
      <g fill="var(--ink)">
        <path d="M180 660 Q210 560 240 660 Z" opacity="0.8" />
        <path d="M1350 680 Q1390 540 1430 680 Z" opacity="0.8" />
      </g>
      <rect x="0" y="655" width="1600" height="4" fill="var(--brass)" opacity="0.3" />
    </svg>
  )
}

function SitePlan() {
  return (
    <svg className="arch-artwork__svg" viewBox="0 0 800 800" role="img" aria-label="Illustrated site plan diagram">
      <rect x="0" y="0" width="800" height="800" fill="var(--limestone)" />
      <rect x="90" y="90" width="620" height="620" fill="none" stroke="var(--ink)" strokeWidth="2" strokeDasharray="10 8" />
      {/* dimension ticks */}
      <g stroke="var(--brass)" strokeWidth="1.5">
        <line x1="90" y1="70" x2="90" y2="90" /><line x1="710" y1="70" x2="710" y2="90" />
        <line x1="90" y1="70" x2="710" y2="70" />
      </g>
      <text x="400" y="50" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="16" fill="var(--brass-deep)">PLOT — 60&apos; x 60&apos; (ILLUSTRATIVE)</text>

      {/* building footprint */}
      <rect x="220" y="260" width="360" height="280" fill="none" stroke="var(--ink)" strokeWidth="2.5" />
      <line x1="220" y1="400" x2="580" y2="400" stroke="var(--ink)" strokeWidth="1" opacity="0.5" />

      {/* trees */}
      <g fill="var(--brass)" opacity="0.55">
        <circle cx="150" cy="150" r="22" /><circle cx="150" cy="650" r="22" />
        <circle cx="650" cy="150" r="22" /><circle cx="650" cy="650" r="22" />
      </g>

      {/* north arrow */}
      <g transform="translate(690,120)">
        <line x1="0" y1="0" x2="0" y2="-40" stroke="var(--ink)" strokeWidth="2" />
        <path d="M0 -40 L-8 -24 L8 -24 Z" fill="var(--ink)" />
        <text x="0" y="14" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="12" fill="var(--ink)">N</text>
      </g>
    </svg>
  )
}

function Elevation() {
  return (
    <svg className="arch-artwork__svg" viewBox="0 0 900 700" role="img" aria-label="Illustrated building elevation drawing">
      <rect x="0" y="0" width="900" height="700" fill="var(--paper)" />
      <line x1="60" y1="560" x2="840" y2="560" stroke="var(--ink)" strokeWidth="2" />

      {/* building outline */}
      <rect x="180" y="220" width="540" height="340" fill="none" stroke="var(--ink)" strokeWidth="2.5" />
      <path d="M180 220 L450 110 L720 220 Z" fill="none" stroke="var(--ink)" strokeWidth="2.5" />

      {/* window grid */}
      <g stroke="var(--brass)" strokeWidth="1.5" fill="var(--brass)" fillOpacity="0.12">
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x={220 + i * 120} y="300" width="80" height="120" />
        ))}
      </g>
      <rect x="420" y="440" width="60" height="120" fill="none" stroke="var(--ink)" strokeWidth="2" />

      {/* dimension line */}
      <g stroke="var(--brass-deep)" strokeWidth="1">
        <line x1="180" y1="600" x2="720" y2="600" />
        <line x1="180" y1="592" x2="180" y2="608" /><line x1="720" y1="592" x2="720" y2="608" />
      </g>
      <text x="450" y="630" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="14" fill="var(--brass-deep)">ELEVATION — ILLUSTRATIVE</text>
    </svg>
  )
}

function Blueprint() {
  return (
    <svg className="arch-artwork__svg" viewBox="0 0 900 900" role="img" aria-label="Illustrated floor plan and elevation study">
      <rect x="0" y="0" width="900" height="900" fill="var(--paper)" />
      <g stroke="var(--line)" strokeWidth="1">
        {Array.from({ length: 17 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 56} y1="0" x2={i * 56} y2="900" />
        ))}
        {Array.from({ length: 17 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 56} x2="900" y2={i * 56} />
        ))}
      </g>

      {/* floor plan */}
      <g stroke="var(--ink)" strokeWidth="3" fill="none">
        <rect x="120" y="120" width="660" height="500" />
        <line x1="120" y1="360" x2="460" y2="360" />
        <line x1="460" y1="120" x2="460" y2="620" />
        <line x1="620" y1="360" x2="620" y2="620" />
      </g>
      {/* door swings */}
      <g stroke="var(--brass)" strokeWidth="1.5" fill="none">
        <path d="M460 400 A40 40 0 0 1 500 440" />
        <path d="M620 480 A36 36 0 0 0 656 516" />
      </g>
      <g fontFamily="var(--font-mono)" fontSize="13" fill="var(--brass-deep)">
        <text x="260" y="250">LIVING</text>
        <text x="540" y="250">BED 01</text>
        <text x="280" y="500">KITCHEN</text>
        <text x="660" y="500">BED 02</text>
      </g>

      {/* detail callout */}
      <circle cx="620" cy="360" r="26" fill="none" stroke="var(--brass)" strokeWidth="2" />
      <text x="900" y="700" textAnchor="end" fontFamily="var(--font-mono)" fontSize="15" fill="var(--brass-deep)">SHEET A—01 · ILLUSTRATIVE PLAN</text>
    </svg>
  )
}

function Execution() {
  return (
    <svg className="arch-artwork__svg" viewBox="0 0 900 900" role="img" aria-label="Illustrated construction site cross-section">
      <rect x="0" y="0" width="900" height="900" fill="var(--ink)" />

      {/* ground strata */}
      <g>
        <rect x="0" y="620" width="900" height="60" fill="var(--brand-charcoal)" />
        <rect x="0" y="680" width="900" height="220" fill="var(--brand-ink)" />
        <g stroke="var(--brass)" strokeOpacity="0.3" strokeWidth="1">
          {Array.from({ length: 14 }).map((_, i) => (
            <line key={i} x1={i * 70 - 40} y1="900" x2={i * 70 + 40} y2="700" />
          ))}
        </g>
      </g>

      {/* structural frame under construction */}
      <g stroke="var(--limestone)" strokeWidth="3" fill="none" opacity="0.9">
        <line x1="200" y1="620" x2="200" y2="260" />
        <line x1="380" y1="620" x2="380" y2="260" />
        <line x1="560" y1="620" x2="560" y2="260" />
        <line x1="740" y1="620" x2="740" y2="260" />
        <line x1="200" y1="260" x2="740" y2="260" />
        <line x1="200" y1="400" x2="740" y2="400" opacity="0.6" />
      </g>

      {/* crane */}
      <g stroke="var(--brass-light)" strokeWidth="3" fill="none">
        <line x1="120" y1="880" x2="120" y2="150" />
        <line x1="120" y1="170" x2="480" y2="170" />
        <line x1="120" y1="170" x2="60" y2="230" />
        <line x1="380" y1="170" x2="380" y2="260" />
      </g>

      <text x="450" y="850" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="15" fill="var(--brass-light)" opacity="0.85">SITE EXECUTION — ILLUSTRATIVE</text>
    </svg>
  )
}

function Material() {
  return (
    <svg className="arch-artwork__svg" viewBox="0 0 900 700" role="img" aria-label="Illustrated interior material and lighting study">
      <rect x="0" y="0" width="900" height="700" fill="var(--paper)" />

      <defs>
        <linearGradient id="metal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--limestone-deep)" />
          <stop offset="50%" stopColor="var(--paper)" />
          <stop offset="100%" stopColor="var(--limestone-deep)" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="var(--brass-light)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--brass-light)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* wood swatch */}
      <g>
        <rect x="60" y="60" width="360" height="260" fill="var(--limestone-deep)" />
        <g stroke="var(--brass-deep)" strokeOpacity="0.4" strokeWidth="2">
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={i} x1="60" y1={80 + i * 30} x2="420" y2={80 + i * 30} />
          ))}
        </g>
        <text x="70" y="300" fontFamily="var(--font-mono)" fontSize="12" fill="var(--brass-deep)">WOOD — ILLUSTRATIVE</text>
      </g>

      {/* stone swatch */}
      <g>
        <rect x="460" y="60" width="380" height="260" fill="var(--brand-cream)" />
        <g fill="var(--charcoal)" opacity="0.18">
          {Array.from({ length: 40 }).map((_, i) => (
            <circle key={i} cx={480 + (i % 8) * 45} cy={90 + Math.floor(i / 8) * 45} r="4" />
          ))}
        </g>
        <text x="470" y="300" fontFamily="var(--font-mono)" fontSize="12" fill="var(--brass-deep)">STONE — ILLUSTRATIVE</text>
      </g>

      {/* metal + lighting swatch */}
      <g>
        <rect x="60" y="360" width="780" height="280" fill="url(#metal)" />
        <rect x="60" y="360" width="780" height="280" fill="url(#glow)" />
        <line x1="60" y1="500" x2="840" y2="500" stroke="var(--ink)" strokeOpacity="0.15" strokeWidth="1" />
        <text x="70" y="620" fontFamily="var(--font-mono)" fontSize="12" fill="var(--brass-deep)">METAL + LIGHT — ILLUSTRATIVE</text>
      </g>
    </svg>
  )
}

function Coordination() {
  return (
    <svg className="arch-artwork__svg" viewBox="0 0 800 900" role="img" aria-label="Illustrated stack of coordinated drawing sheets">
      <rect x="0" y="0" width="800" height="900" fill="var(--limestone)" />

      <g>
        <rect x="120" y="180" width="480" height="620" fill="var(--paper)" stroke="var(--line)" strokeWidth="1" transform="rotate(-4 360 490)" />
        <rect x="150" y="150" width="480" height="620" fill="var(--paper)" stroke="var(--line)" strokeWidth="1" transform="rotate(2 390 460)" />
        <rect x="150" y="140" width="480" height="620" fill="var(--paper)" stroke="var(--ink)" strokeWidth="2" />

        <g fontFamily="var(--font-mono)" fill="var(--brass-deep)" fontSize="13">
          <text x="180" y="190">SHEET A—01</text>
        </g>
        <g stroke="var(--line)" strokeWidth="2">
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={i} x1="180" y1={230 + i * 46} x2="600" y2={230 + i * 46} />
          ))}
        </g>
        <rect x="180" y="230" width="420" height="46" fill="none" stroke="var(--brass)" strokeWidth="2" />
        <rect x="180" y="322" width="230" height="46" fill="none" stroke="var(--brass)" strokeWidth="2" opacity="0.5" />
      </g>
    </svg>
  )
}
