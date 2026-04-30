import THEMES from '../data/themes'
import { useTheme } from '../context/ThemeContext'

const TABS = ['All', 'Light', 'Dark', 'Favorites']

export default function FilterBar({ filter, setFilter, search, setSearch, resultCount }) {
  const { themes, favorites } = useTheme()

  // Badge count per tab (shown as a small pill on the tab)
  const tabCount = {
    Light:     themes.filter((t) => t.category === 'Light').length,
    Dark:      themes.filter((t) => t.category === 'Dark').length,
    Favorites: favorites.length,
  }

  return (
    <div className="filter-bar">
      {/* ── Tab row + search in one flex row ── */}
      <div className="filter-bar__row">
        {/* Tabs */}
        <div className="filter-bar__tabs" role="tablist">
          {TABS.map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={filter === tab}
              className={`filter-bar__tab ${filter === tab ? 'filter-bar__tab--active' : ''}`}
              onClick={() => setFilter(tab)}
            >
              {tab === 'Favorites' && '★ '}
              {tab}
              {tabCount[tab] !== undefined && (
                <span className="filter-bar__tab-count">{tabCount[tab]}</span>
              )}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="filter-bar__search-wrap">
          <span className="filter-bar__search-icon">🔍</span>
          <input
            className="filter-bar__search"
            type="search"
            placeholder="Search themes…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search themes"
          />
        </div>
      </div>

      {/* ── Results count ── */}
      <p className="filter-bar__count">
        Showing <strong>{resultCount}</strong> of {themes.length} themes
        {search && ` for "${search}"`}
      </p>
    </div>
  )
}