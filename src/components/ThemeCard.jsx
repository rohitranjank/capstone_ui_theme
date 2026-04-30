import { useTheme } from '../context/ThemeContext'
import ColorSwatch from './ColorSwatch'

export default function ThemeCard({ theme }) {
  const { activeThemeId, favorites, applyTheme, toggleFavorite } = useTheme()

  const isActive  = activeThemeId === theme.id
  const isFav     = favorites.includes(theme.id)
  const c         = theme.colors

  return (
    <article
      className={`theme-card ${isActive ? 'theme-card--active' : ''}`}
      style={{
        /* Use inline style only for dynamic per-theme colors */
        '--card-primary':    c.primary,
        '--card-secondary':  c.secondary,
        '--card-accent':     c.accent,
        '--card-bg':         c.background,
        '--card-surface':    c.surface,
        '--card-text':       c.text,
        '--card-muted':      c.muted,
        '--card-border':     c.border,
        background:          c.surface,
        borderColor:         isActive ? c.primary : c.border,
        boxShadow:           isActive
          ? `0 0 0 3px ${c.primary}30, 0 8px 32px ${c.primary}20`
          : undefined,
      }}
    >
      {/* ── Active badge ── */}
      {isActive && (
        <span
          className="theme-card__active-badge"
          style={{ background: c.primary, color: c.background }}
        >
          Active
        </span>
      )}

      {/* ── Favorite star button ── */}
      <button
        className={`theme-card__fav-btn ${isFav ? 'theme-card__fav-btn--on' : ''}`}
        onClick={() => toggleFavorite(theme.id)}
        aria-label={isFav ? 'Remove from favorites' : 'Add to favorites'}
        title={isFav ? 'Remove from favorites' : 'Add to favorites'}
      >
        {isFav ? '★' : '☆'}
      </button>

      {/* ── Gradient banner ── */}
      <div
        className="theme-card__banner"
        style={{
          background: `linear-gradient(135deg, ${c.primary} 0%, ${c.secondary} 55%, ${c.accent} 100%)`,
        }}
      >
        {/* Subtle diagonal stripe overlay */}
        <div className="theme-card__banner-stripe" />
      </div>

      {/* ── Category pill ── */}
      <div>
        <span
          className="pill"
          style={{ background: `${c.primary}22`, color: c.primary }}
        >
          {theme.category}
        </span>
      </div>

      {/* ── Name + description + fonts ── */}
      <div className="theme-card__meta">
        <h3 className="theme-card__name" style={{ color: c.text }}>
          {theme.name}
        </h3>
        <p className="theme-card__desc" style={{ color: c.muted }}>
          {theme.description}
        </p>
        {/* Font pairing info */}
        <p
          className="theme-card__fonts"
          style={{ color: c.muted, fontSize: '10px', marginTop: '4px', fontStyle: 'italic' }}
        >
          🔤 {theme.fonts.heading.split("'")[1]} • {theme.fonts.body.split("'")[1]}
        </p>
      </div>

      {/* ── Color palette swatches ── */}
      <ColorSwatch colors={c} />

      {/* ── Apply button ── */}
      <button
        className="theme-card__apply-btn"
        onClick={() => applyTheme(theme.id)}
        disabled={isActive}
        style={
          isActive
            ? { background: c.primary, color: c.background, borderColor: c.primary }
            : { color: c.primary, borderColor: c.primary }
        }
      >
        {isActive ? '✓ Applied' : 'Apply Theme'}
      </button>
    </article>
  )
}