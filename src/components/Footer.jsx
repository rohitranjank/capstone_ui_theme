import { useTheme } from '../context/ThemeContext'

export default function Footer() {
  const { activeTheme, themes } = useTheme()
  const c = activeTheme.colors

  return (
    <footer
      className="footer"
      style={{ background: c.surface, borderTopColor: c.border }}
    >
      <p className="footer__text" style={{ color: c.muted }}>
        <strong style={{ color: c.text }}>ThemeMarket</strong>
        {' '}— {themes.length} themes • Active:{' '}
        <strong style={{ color: c.primary }}>{activeTheme.name}</strong>
      </p>

      <div className="footer__dots">
        {[c.primary, c.secondary, c.accent].map((col, i) => (
          <span key={i} className="footer__dot" style={{ background: col }} />
        ))}
      </div>
    </footer>
  )
}