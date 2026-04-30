import ThemeCard from './ThemeCard'

export default function ThemeGrid({ themes, filter, search }) {
  // ── Empty state ───────────────────────────────────────────
  if (themes.length === 0) {
    return (
      <div className="theme-grid__empty">
        <div className="theme-grid__empty-icon">
          {filter === 'Favorites' ? '☆' : '🔍'}
        </div>
        <p className="theme-grid__empty-text">
          {filter === 'Favorites'
            ? 'No favorites yet — click ☆ on any theme card to save it.'
            : `No themes found for "${search}". Try a different keyword.`}
        </p>
      </div>
    )
  }

  // ── Grid of cards ─────────────────────────────────────────
  return (
    <div className="theme-grid">
      {themes.map((theme) => (
        <ThemeCard key={theme.id} theme={theme} />
      ))}
    </div>
  )
}