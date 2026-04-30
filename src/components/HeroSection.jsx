import { useTheme } from '../context/ThemeContext'

export default function HeroSection() {
  const { themes, favorites, activeTheme } = useTheme()
  const c = activeTheme.colors

  const stats = [
    { label: 'Total',    value: themes.length },
    { label: 'Light',    value: themes.filter((t) => t.category === 'Light').length },
    { label: 'Dark',     value: themes.filter((t) => t.category === 'Dark').length },
    { label: '★ Saved', value: favorites.length },
  ]

  return (
    <section className="hero">
      {/* Radial glow decoration */}
      <div
        className="hero__glow"
        style={{ background: `radial-gradient(ellipse, ${c.primary}18 0%, transparent 70%)` }}
      />

      <p className="hero__eyebrow" style={{ color: c.primary }}>
        ✦ Curated Collections
      </p>

      <h1 className="hero__headline" style={{ color: c.text }}>
        Beautiful UI Themes,{' '}
        <span style={{ color: c.primary }}>Instantly Applied</span>
      </h1>

      <p className="hero__sub" style={{ color: c.muted }}>
        Browse {themes.length} handcrafted themes. Click any card to see your
        entire UI transform in real time — no refresh needed.
      </p>

      {/* Stats pills */}
      <div className="hero__stats">
        {stats.map((s) => (
          <div
            key={s.label}
            className="hero__stat"
            style={{ background: c.surface, borderColor: c.border, color: c.muted }}
          >
            <strong style={{ color: c.text }}>{s.value}</strong>
            {s.label}
          </div>
        ))}
      </div>
    </section>
  )
}