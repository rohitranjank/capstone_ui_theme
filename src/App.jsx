import { useState, useMemo } from 'react'

import { ThemeProvider, useTheme } from './context/ThemeContext'

import Navbar       from './components/Navbar'
import HeroSection  from './components/HeroSection'
import FilterBar    from './components/FilterBar'
import ThemeGrid    from './components/ThemeGrid'
import LivePreview  from './components/LivePreview'
import ColorTokens  from './components/ColorTokens'
import Footer       from './components/Footer'

function AppContent() {
  const { activeTheme, isTransitioning } = useTheme()
  const c = activeTheme.colors

  const [filter,      setFilter]      = useState('All')
  const [search,      setSearch]      = useState('')
  const [showPreview, setShowPreview] = useState(true)

  const { themes, favorites } = useTheme()

  const filteredThemes = useMemo(() => {
    return themes.filter((theme) => {
      const matchTab =
        filter === 'All' ||
        (filter === 'Favorites' && favorites.includes(theme.id)) ||
        theme.category === filter

      const q = search.toLowerCase()
      const matchSearch =
        !q ||
        theme.name.toLowerCase().includes(q) ||
        theme.description.toLowerCase().includes(q)

      return matchTab && matchSearch
    })
  }, [themes, favorites, filter, search])

  return (
    <div
      className={`app-wrapper ${isTransitioning ? 'app-wrapper--transitioning' : ''}`}
      style={{ background: c.background, color: c.text }}
    >
      {/* ── Sticky navigation bar ── */}
      <Navbar
        showPreview={showPreview}
        onTogglePreview={() => setShowPreview((p) => !p)}
      />

      <main className="main">
        {/* ── Hero headline + stats ── */}
        <HeroSection />

        {/* ── Content: left grid + right panel ── */}
        <div className={`content ${showPreview ? 'content--with-preview' : ''}`}>

          {/* ── LEFT: filter bar + theme grid ── */}
          <div className="left-col">
            <FilterBar
              filter={filter}
              setFilter={setFilter}
              search={search}
              setSearch={setSearch}
              resultCount={filteredThemes.length}
            />
            <ThemeGrid
              themes={filteredThemes}
              filter={filter}
              search={search}
            />
          </div>

          {/* ── RIGHT: live preview panel (sticky) ── */}
          {showPreview && (
            <aside className="right-col">
              <div className="right-col__header">
                <h2 className="right-col__title" style={{ color: c.text }}>
                  Live Preview
                </h2>
                <p className="right-col__sub" style={{ color: c.muted }}>
                  Updates instantly as you apply themes
                </p>
              </div>

              <LivePreview />
              <ColorTokens />
            </aside>
          )}
        </div>
      </main>

      {/* ── Footer ── */}
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}