import { useTheme } from '../context/ThemeContext'

export default function Navbar({ showPreview, onTogglePreview }) {
  const { activeTheme } = useTheme()
  const c = activeTheme.colors

  return (
    <header className="navbar">
      {/* ── Logo ── */}
      <div className="navbar__brand">
        <div className="navbar__logo">🎨</div>
        <div className="navbar__title-group">
          <span className="navbar__title">ThemeMarket</span>
          <span className="navbar__subtitle">UI DESIGN SYSTEM</span>
        </div>
      </div>

      {/* ── Active theme info + preview toggle ── */}
      <div className="navbar__right">
        <span className="navbar__active-label">Active theme:</span>

        {/* Three color dots */}
        <div className="navbar__dots">
          {[c.primary, c.secondary, c.accent].map((col, i) => (
            <span
              key={i}
              className="navbar__dot"
              style={{ background: col }}
            />
          ))}
        </div>

        <span className="navbar__active-name">{activeTheme.name}</span>

        {/* Preview panel toggle */}
        <button
          className={`btn btn--sm ${showPreview ? 'btn--active' : 'btn--ghost'}`}
          onClick={onTogglePreview}
        >
          {showPreview ? 'Hide Preview' : 'Show Preview'}
        </button>
      </div>
    </header>
  )
}