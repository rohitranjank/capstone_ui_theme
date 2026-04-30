import { useTheme } from '../context/ThemeContext'

export default function ColorTokens() {
  const { activeTheme } = useTheme()
  const c = activeTheme.colors

  return (
    <div
      className="color-tokens"
      style={{ background: c.surface, borderColor: c.border }}
    >
      <p className="color-tokens__heading" style={{ color: c.muted }}>
        Color Tokens — {activeTheme.name}
      </p>

      {Object.entries(c).map(([key, val]) => (
        <div
          key={key}
          className="color-tokens__row"
          style={{ borderBottomColor: c.border }}
        >
          {/* Color swatch dot */}
          <div className="color-tokens__left">
            <span
              className="color-tokens__dot"
              style={{ background: val, borderColor: c.border }}
            />
            <span className="color-tokens__name" style={{ color: c.muted }}>
              --tm-{key}
            </span>
          </div>

          {/* Hex value */}
          <code className="color-tokens__value" style={{ color: c.text }}>
            {val}
          </code>
        </div>
      ))}
    </div>
  )
}