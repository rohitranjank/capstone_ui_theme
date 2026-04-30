export default function ColorSwatch({ colors }) {
  const swatchColors = [
    { hex: colors.primary,    label: 'Primary'    },
    { hex: colors.secondary,  label: 'Secondary'  },
    { hex: colors.accent,     label: 'Accent'     },
    { hex: colors.background, label: 'Background' },
    { hex: colors.text,       label: 'Text'       },
  ]

  return (
    <div className="swatch">
      {swatchColors.map((s, i) => (
        <span
          key={i}
          className={`swatch__dot ${i === 0 ? 'swatch__dot--lg' : ''}`}
          style={{ background: s.hex }}
          title={`${s.label}: ${s.hex}`}
          aria-label={`${s.label}: ${s.hex}`}
        />
      ))}
    </div>
  )
}