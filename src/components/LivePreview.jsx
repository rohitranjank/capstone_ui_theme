import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'

export default function LivePreview() {
  const { activeTheme } = useTheme()
  const c = activeTheme.colors

  // Controlled form state for live interactivity
  const [inputVal, setInputVal]   = useState('designer@example.com')
  const [sliderVal, setSliderVal] = useState(72)
  const [checked, setChecked]     = useState(true)

  const s = {
    panel:     { background: c.background, borderColor: c.border },
    titlebar:  { background: c.surface, borderBottomColor: c.border },
    nav:       { background: c.surface, borderBottomColor: c.border },
    body:      { background: c.background },
    label:     { color: c.muted },
    sectionHd: { color: c.muted },
    card:      { background: c.surface, borderColor: c.border },
    input:     { background: c.background, color: c.text, borderColor: c.border },
    text:      { color: c.text },
    muted:     { color: c.muted },
  }

  return (
    <div className="preview" style={s.panel}>

      {/* ── macOS-style titlebar ── */}
      <div className="preview__titlebar" style={s.titlebar}>
        <div className="preview__traffic-lights">
          {['#FF5F57', '#FEBC2E', '#28C840'].map((bg, i) => (
            <span key={i} className="preview__dot" style={{ background: bg }} />
          ))}
        </div>
        <span className="preview__filename" style={s.muted}>
          preview.tsx — {activeTheme.name}
          <br />
          <span style={{ fontSize: '9px', marginTop: '2px', display: 'block' }}>
            🔤 {activeTheme.fonts.heading.split("'")[1]} • {activeTheme.fonts.body.split("'")[1]}
          </span>
        </span>
      </div>

      {/* ── Mini Navbar ── */}
      <nav className="preview__nav" style={s.nav}>
        <div className="preview__nav-brand">
          <div
            className="preview__nav-logo"
            style={{ background: `linear-gradient(135deg, ${c.primary}, ${c.secondary})` }}
          />
          <span className="preview__nav-name" style={s.text}>Marketplace</span>
        </div>
        <div className="preview__nav-links">
          {['Explore', 'Themes', 'Docs'].map((link) => (
            <span key={link} className="preview__nav-link" style={s.muted}>{link}</span>
          ))}
          <span
            className="preview__nav-cta"
            style={{ background: c.primary, color: c.background }}
          >
            Sign Up
          </span>
        </div>
      </nav>

      {/* ── Preview body ── */}
      <div className="preview__body">

        {/* Buttons */}
        <div className="preview__section">
          <p className="preview__section-hd" style={s.sectionHd}>Buttons</p>
          <div className="preview__row">
            <button className="preview__btn" style={{ background: c.primary, color: c.background, border: 'none' }}>Primary</button>
            <button className="preview__btn" style={{ background: 'transparent', color: c.primary, border: `1.5px solid ${c.primary}` }}>Outline</button>
            <button className="preview__btn" style={{ background: `${c.accent}22`, color: c.accent, border: 'none' }}>Ghost</button>
            <button className="preview__btn" style={{ background: c.secondary, color: c.background, border: 'none' }}>Secondary</button>
          </div>
        </div>

        {/* Badges */}
        <div className="preview__section">
          <p className="preview__section-hd" style={s.sectionHd}>Badges</p>
          <div className="preview__row preview__row--wrap">
            {[
              { label: 'New',      bg: `${c.primary}22`,  col: c.primary   },
              { label: 'Popular',  bg: `${c.secondary}22`,col: c.secondary  },
              { label: 'Featured', bg: `${c.accent}22`,   col: c.accent     },
              { label: 'Free',     bg: '#10B98122',        col: '#10B981'    },
              { label: 'Pro',      bg: '#F5931422',        col: '#F59314'    },
            ].map((b) => (
              <span key={b.label} className="badge" style={{ background: b.bg, color: b.col }}>
                {b.label}
              </span>
            ))}
          </div>
        </div>

        {/* Card + Form (two columns) */}
        <div className="preview__two-col">

          {/* Mini product card */}
          <div className="preview__card" style={s.card}>
            <div
              className="preview__card-img"
              style={{ background: `linear-gradient(120deg, ${c.primary}50, ${c.accent}50)` }}
            >
              🎨
            </div>
            <p className="preview__card-title" style={s.text}>Design Kit</p>
            <p className="preview__card-desc"  style={s.muted}>Customizable components</p>
            <div className="preview__card-footer">
              <span className="preview__card-price" style={{ color: c.primary }}>$49</span>
              <span
                className="preview__card-add"
                style={{ background: `${c.primary}18`, color: c.primary }}
              >
                Add to cart
              </span>
            </div>
          </div>

          {/* Form inputs */}
          <div className="preview__form" style={s.card}>
            <div className="preview__field">
              <label className="preview__label" style={s.label}>Email</label>
              <input
                className="preview__input"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                style={s.input}
                onFocus={(e)  => (e.target.style.borderColor = c.primary)}
                onBlur={(e)   => (e.target.style.borderColor = c.border)}
              />
            </div>
            <div className="preview__field">
              <label className="preview__label" style={s.label}>
                Opacity — {sliderVal}%
              </label>
              <input
                type="range"
                min={0} max={100}
                value={sliderVal}
                onChange={(e) => setSliderVal(Number(e.target.value))}
                className="preview__range"
                style={{ accentColor: c.primary }}
              />
            </div>
            <label className="preview__checkbox-label" style={s.text}>
              <input
                type="checkbox"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                style={{ accentColor: c.primary }}
              />
              Enable notifications
            </label>
          </div>
        </div>

        {/* Progress bars */}
        <div className="preview__section">
          <p className="preview__section-hd" style={s.sectionHd}>Progress</p>
          {[
            { label: 'Downloads', val: 82, color: c.primary   },
            { label: 'Stars',     val: 65, color: c.secondary  },
            { label: 'Installs',  val: 47, color: c.accent     },
          ].map((bar) => (
            <div key={bar.label} className="preview__progress">
              <div className="preview__progress-hd">
                <span style={s.muted}>{bar.label}</span>
                <span style={s.text}><strong>{bar.val}%</strong></span>
              </div>
              <div className="preview__progress-track" style={{ background: c.border }}>
                <div
                  className="preview__progress-fill"
                  style={{ width: `${bar.val}%`, background: bar.color }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}