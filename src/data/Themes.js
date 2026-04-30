const THEMES = [

  //  01 
  {
    id: 'glacier',
    name: 'Glacier Peak',
    description: 'Alpine whites, crystalline clarity',
    category: 'Light',
    colors: {
      primary:    '#2563EB',
      secondary:  '#0284C7',
      accent:     '#7C3AED',
      background: '#F8FAFC',
      surface:    '#FFFFFF',
      text:       '#0F172A',
      muted:      '#64748B',
      border:     '#E2E8F0',
    },
    fonts: {
      heading: "'Inter', system-ui, sans-serif",
      body:    "'Inter', system-ui, sans-serif",
      google:  'family=Inter:wght@400;500;600;700;800;900',
    },
  },

  //  02 
  {
    id: 'aurora',
    name: 'Aurora Borealis',
    description: 'Cool nordic hues, icy elegance',
    category: 'Dark',
    colors: {
      primary:    '#6EE7F7',
      secondary:  '#7C3AED',
      accent:     '#34D399',
      background: '#0D1117',
      surface:    '#161B22',
      text:       '#E6EDF3',
      muted:      '#8B949E',
      border:     '#30363D',
    },
    fonts: {
      heading: "'Space Grotesk', sans-serif",
      body:    "'Space Grotesk', sans-serif",
      google:  'family=Space+Grotesk:wght@400;500;600;700',
    },
  },

  //  03 
  {
    id: 'sakura',
    name: 'Sakura Bloom',
    description: 'Soft petals, warm spring warmth',
    category: 'Light',
    colors: {
      primary:    '#D946A8',
      secondary:  '#F472B6',
      accent:     '#FB923C',
      background: '#FFF5F9',
      surface:    '#FFFFFF',
      text:       '#1F1235',
      muted:      '#9D8BA5',
      border:     '#F3D9E8',
    },
    fonts: {
      heading: "'Cormorant Garamond', Georgia, serif",
      body:    "'Cormorant Garamond', Georgia, serif",
      google:  'family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400',
    },
  },

  //  04 
  {
    id: 'obsidian',
    name: 'Obsidian Forge',
    description: 'Molten edges, raw industrial power',
    category: 'Dark',
    colors: {
      primary:    '#FF6B35',
      secondary:  '#FFB800',
      accent:     '#FF3860',
      background: '#0A0A0A',
      surface:    '#141414',
      text:       '#F5F5F5',
      muted:      '#666666',
      border:     '#2A2A2A',
    },
    fonts: {
      heading: "'Bebas Neue', Impact, sans-serif",
      body:    "'Roboto', sans-serif",
      google:  'family=Bebas+Neue&family=Roboto:wght@400;500;700',
    },
  },

  //  05 
  {
    id: 'lagoon',
    name: 'Lagoon Mist',
    description: 'Shallow teal waters, coastal calm',
    category: 'Light',
    colors: {
      primary:    '#0891B2',
      secondary:  '#06B6D4',
      accent:     '#10B981',
      background: '#F0FDFF',
      surface:    '#FFFFFF',
      text:       '#0C2033',
      muted:      '#64748B',
      border:     '#BAE6FD',
    },
    fonts: {
      heading: "'Raleway', sans-serif",
      body:    "'Lato', sans-serif",
      google:  'family=Raleway:wght@400;500;600;700;800&family=Lato:wght@400;700',
    },
  },

  //  06 
  {
    id: 'velvet',
    name: 'Velvet Dusk',
    description: 'Rich plums, midnight glamour',
    category: 'Dark',
    colors: {
      primary:    '#C084FC',
      secondary:  '#818CF8',
      accent:     '#F472B6',
      background: '#0F0A1E',
      surface:    '#1A1130',
      text:       '#EDE9FE',
      muted:      '#7C6FA0',
      border:     '#2D1F4E',
    },
    fonts: {
      heading: "'Playfair Display', Georgia, serif",
      body:    "'DM Sans', system-ui, sans-serif",
      google:  'family=Playfair+Display:wght@700;800;900&family=DM+Sans:opsz,wght@9..40,400;500;600;700',
    },
  },

  //  07 
  {
    id: 'citrus',
    name: 'Citrus Grove',
    description: 'Sun-drenched, vibrant and juicy',
    category: 'Light',
    colors: {
      primary:    '#EA580C',
      secondary:  '#D97706',
      accent:     '#65A30D',
      background: '#FFFBEB',
      surface:    '#FFFFFF',
      text:       '#1C1917',
      muted:      '#78716C',
      border:     '#FDE68A',
    },
    fonts: {
      heading: "'Fredoka One', cursive",
      body:    "'Nunito', sans-serif",
      google:  'family=Fredoka+One&family=Nunito:wght@400;600;700',
    },
  },

  //  08 
  {
    id: 'ember',
    name: 'Ember Glow',
    description: 'Deep reds, embers in the dark',
    category: 'Dark',
    colors: {
      primary:    '#F87171',
      secondary:  '#FB923C',
      accent:     '#FBBF24',
      background: '#0C0505',
      surface:    '#1C0D0D',
      text:       '#FEF2F2',
      muted:      '#9E6B6B',
      border:     '#3B1414',
    },
    fonts: {
      heading: "'Oswald', sans-serif",
      body:    "'Source Sans 3', sans-serif",
      google:  'family=Oswald:wght@400;500;600;700&family=Source+Sans+3:wght@400;600',
    },
  },

  //  09 
  {
    id: 'forest',
    name: 'Moss and Pine',
    description: 'Earthy greens, ancient forest floor',
    category: 'Dark',
    colors: {
      primary:    '#4ADE80',
      secondary:  '#86EFAC',
      accent:     '#FCD34D',
      background: '#071A0E',
      surface:    '#0D2418',
      text:       '#F0FDF4',
      muted:      '#6B9E78',
      border:     '#1A4028',
    },
    fonts: {
      heading: "'Libre Baskerville', Georgia, serif",
      body:    "'Libre Baskerville', Georgia, serif",
      google:  'family=Libre+Baskerville:ital,wght@0,400;0,700;1,400',
    },
  },

  //  10 
  {
    id: 'lavender',
    name: 'Lavender Fields',
    description: 'Dreamy purples, provence morning',
    category: 'Light',
    colors: {
      primary:    '#7C3AED',
      secondary:  '#A78BFA',
      accent:     '#EC4899',
      background: '#FAF5FF',
      surface:    '#FFFFFF',
      text:       '#2E1065',
      muted:      '#8B6FC4',
      border:     '#DDD6FE',
    },
    fonts: {
      heading: "'Abril Fatface', serif",
      body:    "'Poppins', sans-serif",
      google:  'family=Abril+Fatface&family=Poppins:wght@400;500;600;700',
    },
  },

  //  11 
  {
    id: 'midnight',
    name: 'Midnight Ocean',
    description: 'Deep navy, bioluminescent mystery',
    category: 'Dark',
    colors: {
      primary:    '#38BDF8',
      secondary:  '#818CF8',
      accent:     '#34D399',
      background: '#020C18',
      surface:    '#071428',
      text:       '#E0F2FE',
      muted:      '#4E7A9B',
      border:     '#0C2340',
    },
    fonts: {
      heading: "'Exo 2', sans-serif",
      body:    "'Exo 2', sans-serif",
      google:  'family=Exo+2:wght@400;500;600;700;800',
    },
  },

  //  12 
  {
    id: 'terracotta',
    name: 'Terracotta Sun',
    description: 'Warm clay, Mediterranean afternoons',
    category: 'Light',
    colors: {
      primary:    '#B45309',
      secondary:  '#D97706',
      accent:     '#DC2626',
      background: '#FFFAF5',
      surface:    '#FFFFFF',
      text:       '#292524',
      muted:      '#A8836A',
      border:     '#FDDCBB',
    },
    fonts: {
      heading: "'Lobster', cursive",
      body:    "'Lato', sans-serif",
      google:  'family=Lobster&family=Lato:wght@400;700',
    },
  },

  //  13 
  {
    id: 'neon-city',
    name: 'Neon City',
    description: 'Electric lights, cyberpunk pulse',
    category: 'Dark',
    colors: {
      primary:    '#E879F9',
      secondary:  '#22D3EE',
      accent:     '#A3E635',
      background: '#05000F',
      surface:    '#100020',
      text:       '#F0E6FF',
      muted:      '#7B6B9D',
      border:     '#2A1040',
    },
    fonts: {
      heading: "'Syne', sans-serif",
      body:    "'Syne', sans-serif",
      google:  'family=Syne:wght@400;500;600;700;800',
    },
  },

  //  14 
  {
    id: 'rose-gold',
    name: 'Rose Gold',
    description: 'Warm metallics, luxe minimalism',
    category: 'Light',
    colors: {
      primary:    '#B76E79',
      secondary:  '#C9957C',
      accent:     '#9C6B5E',
      background: '#FDF6F0',
      surface:    '#FFFFFF',
      text:       '#2D1B1B',
      muted:      '#9B7B78',
      border:     '#F2D5CC',
    },
    fonts: {
      heading: "'Josefin Sans', sans-serif",
      body:    "'Josefin Sans', sans-serif",
      google:  'family=Josefin+Sans:wght@300;400;600;700',
    },
  },

  //  15 
  {
    id: 'arctic',
    name: 'Arctic White',
    description: 'Tundra frost, stark and expansive',
    category: 'Light',
    colors: {
      primary:    '#0EA5E9',
      secondary:  '#67E8F9',
      accent:     '#A78BFA',
      background: '#F9FAFB',
      surface:    '#FFFFFF',
      text:       '#111827',
      muted:      '#6B7280',
      border:     '#D1D5DB',
    },
    fonts: {
      heading: "'DM Serif Display', serif",
      body:    "'DM Sans', system-ui, sans-serif",
      google:  'family=DM+Serif+Display&family=DM+Sans:opsz,wght@9..40,400;500;600;700',
    },
  },

  //  16 
  {
    id: 'crimson',
    name: 'Crimson Tide',
    description: 'Ancient power, dramatic and bold',
    category: 'Dark',
    colors: {
      primary:    '#DC2626',
      secondary:  '#F87171',
      accent:     '#F59E0B',
      background: '#0A0000',
      surface:    '#1A0505',
      text:       '#FEF2F2',
      muted:      '#9B5A5A',
      border:     '#3B0808',
    },
    fonts: {
      heading: "'Cinzel', serif",
      body:    "'Raleway', sans-serif",
      google:  'family=Cinzel:wght@400;500;600;700&family=Raleway:wght@400;500;600',
    },
  },

  //  17 
  {
    id: 'matcha',
    name: 'Matcha Latte',
    description: 'Soft greens, Japanese café warmth',
    category: 'Light',
    colors: {
      primary:    '#4D7C0F',
      secondary:  '#65A30D',
      accent:     '#CA8A04',
      background: '#F7FEE7',
      surface:    '#FFFFFF',
      text:       '#1A2E05',
      muted:      '#6B8050',
      border:     '#D9F99D',
    },
    fonts: {
      heading: "'Satisfy', cursive",
      body:    "'Quicksand', sans-serif",
      google:  'family=Satisfy&family=Quicksand:wght@400;500;600;700',
    },
  },

  //  18 
  {
    id: 'cosmos',
    name: 'Cosmos',
    description: 'Infinite void, stardust and silence',
    category: 'Dark',
    colors: {
      primary:    '#818CF8',
      secondary:  '#C084FC',
      accent:     '#FB7185',
      background: '#020210',
      surface:    '#080828',
      text:       '#E0E7FF',
      muted:      '#5B6B9E',
      border:     '#1A2050',
    },
    fonts: {
      heading: "'Righteous', cursive",
      body:    "'Righteous', cursive",
      google:  'family=Righteous',
    },
  },

  //  19 
  {
    id: 'pixel-retro',
    name: 'Pixel Retro',
    description: '8-bit nostalgia, press start to play',
    category: 'Dark',
    colors: {
      primary:    '#00FF41',
      secondary:  '#FF6B00',
      accent:     '#FF0080',
      background: '#000000',
      surface:    '#0D0D0D',
      text:       '#00FF41',
      muted:      '#005A17',
      border:     '#003D10',
    },
    fonts: {
      heading: "'Press Start 2P', monospace",
      body:    "'VT323', monospace",
      google:  'family=Press+Start+2P&family=VT323',
    },
  },

  //  20 
  {
    id: 'peacock',
    name: 'Peacock Feather',
    description: 'Iridescent teal, bold geometry',
    category: 'Dark',
    colors: {
      primary:    '#00BCD4',
      secondary:  '#4CAF50',
      accent:     '#FF9800',
      background: '#001018',
      surface:    '#002030',
      text:       '#E0F7FA',
      muted:      '#507080',
      border:     '#004060',
    },
    fonts: {
      heading: "'Unbounded', sans-serif",
      body:    "'Inter', system-ui, sans-serif",
      google:  'family=Unbounded:wght@400;600;700;900&family=Inter:wght@400;500;600',
    },
  },

  //  21 
  {
    id: 'desert-sunset',
    name: 'Desert Sunset',
    description: 'Ochre and coral, golden hour heat',
    category: 'Light',
    colors: {
      primary:    '#F97316',
      secondary:  '#EF4444',
      accent:     '#EAB308',
      background: '#FFF7ED',
      surface:    '#FFFFFF',
      text:       '#431407',
      muted:      '#9A6240',
      border:     '#FED7AA',
    },
    fonts: {
      heading: "'Pacifico', cursive",
      body:    "'Quicksand', sans-serif",
      google:  'family=Pacifico&family=Quicksand:wght@400;500;600;700',
    },
  },

  //  22 
  {
    id: 'charcoal',
    name: 'Charcoal Studio',
    description: 'Polished dark, professional edge',
    category: 'Dark',
    colors: {
      primary:    '#6366F1',
      secondary:  '#8B5CF6',
      accent:     '#06B6D4',
      background: '#111111',
      surface:    '#1C1C1C',
      text:       '#F4F4F5',
      muted:      '#71717A',
      border:     '#27272A',
    },
    fonts: {
      heading: "'Montserrat', sans-serif",
      body:    "'Open Sans', sans-serif",
      google:  'family=Montserrat:wght@400;500;600;700;800&family=Open+Sans:wght@400;600',
    },
  },

  //  23 
  {
    id: 'cotton-candy',
    name: 'Cotton Candy',
    description: 'Sugary pastels, carefree delight',
    category: 'Light',
    colors: {
      primary:    '#F472B6',
      secondary:  '#A78BFA',
      accent:     '#34D399',
      background: '#FDF4FF',
      surface:    '#FFFFFF',
      text:       '#1E0030',
      muted:      '#A07AC0',
      border:     '#F0D6FF',
    },
    fonts: {
      heading: "'Permanent Marker', cursive",
      body:    "'Comic Neue', cursive",
      google:  'family=Permanent+Marker&family=Comic+Neue:wght@400;700',
    },
  },

  //  24 
  {
    id: 'noctis',
    name: 'Noctis',
    description: 'Smooth slate, developer-friendly dark',
    category: 'Dark',
    colors: {
      primary:    '#5B9BD5',
      secondary:  '#78C99A',
      accent:     '#E8A87C',
      background: '#1B1D2A',
      surface:    '#252839',
      text:       '#D4DAEA',
      muted:      '#6C738A',
      border:     '#353848',
    },
    fonts: {
      heading: "'Space Grotesk', sans-serif",
      body:    "'Space Grotesk', sans-serif",
      google:  'family=Space+Grotesk:wght@300;400;500;600;700',
    },
  },

  //  25 
  {
    id: 'coral-reef',
    name: 'Coral Reef',
    description: 'Warm corals, tropical freshness',
    category: 'Light',
    colors: {
      primary:    '#F43F5E',
      secondary:  '#FB7185',
      accent:     '#06B6D4',
      background: '#FFF1F2',
      surface:    '#FFFFFF',
      text:       '#1F0A0E',
      muted:      '#9F6672',
      border:     '#FECDD3',
    },
    fonts: {
      heading: "'Raleway', sans-serif",
      body:    "'Lato', sans-serif",
      google:  'family=Raleway:wght@400;600;700;800&family=Lato:wght@400;700',
    },
  },

  //  26 
  {
    id: 'amethyst',
    name: 'Amethyst Cave',
    description: 'Crystal purples, subterranean magic',
    category: 'Dark',
    colors: {
      primary:    '#A855F7',
      secondary:  '#7C3AED',
      accent:     '#EC4899',
      background: '#0D0518',
      surface:    '#180A28',
      text:       '#F3E8FF',
      muted:      '#7A5FA0',
      border:     '#2E1050',
    },
    fonts: {
      heading: "'Playfair Display', Georgia, serif",
      body:    "'DM Sans', system-ui, sans-serif",
      google:  'family=Playfair+Display:wght@700;800;900&family=DM+Sans:opsz,wght@9..40,400;500;700',
    },
  },

  //  27 
  {
    id: 'mint',
    name: 'Mint Fresh',
    description: 'Crisp mint, clean and invigorating',
    category: 'Light',
    colors: {
      primary:    '#059669',
      secondary:  '#10B981',
      accent:     '#0EA5E9',
      background: '#ECFDF5',
      surface:    '#FFFFFF',
      text:       '#064E3B',
      muted:      '#4B9B78',
      border:     '#A7F3D0',
    },
    fonts: {
      heading: "'Inter', system-ui, sans-serif",
      body:    "'Inter', system-ui, sans-serif",
      google:  'family=Inter:wght@400;500;600;700;800',
    },
  },

  //  28 
  {
    id: 'volcano',
    name: 'Volcano',
    description: 'Molten rock, unstoppable force',
    category: 'Dark',
    colors: {
      primary:    '#F97316',
      secondary:  '#EF4444',
      accent:     '#FBBF24',
      background: '#0F0500',
      surface:    '#1A0A00',
      text:       '#FFF7ED',
      muted:      '#8A5030',
      border:     '#3A1800',
    },
    fonts: {
      heading: "'Bebas Neue', Impact, sans-serif",
      body:    "'Roboto', sans-serif",
      google:  'family=Bebas+Neue&family=Roboto:wght@400;500;700',
    },
  },

  //  29 
  {
    id: 'gilded',
    name: 'Gilded Gold',
    description: 'Warm gold, opulent and refined',
    category: 'Light',
    colors: {
      primary:    '#B7791F',
      secondary:  '#D97706',
      accent:     '#92400E',
      background: '#FFFBF0',
      surface:    '#FFFFFF',
      text:       '#1C1008',
      muted:      '#A07840',
      border:     '#FDE68A',
    },
    fonts: {
      heading: "'Cormorant Garamond', Georgia, serif",
      body:    "'Cormorant Garamond', Georgia, serif",
      google:  'family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400',
    },
  },

  //  30 
  {
    id: 'deep-sea',
    name: 'Deep Sea',
    description: 'Hadal depths, pressure and blue light',
    category: 'Dark',
    colors: {
      primary:    '#0284C7',
      secondary:  '#0E7490',
      accent:     '#22D3EE',
      background: '#00060F',
      surface:    '#001428',
      text:       '#BAE6FD',
      muted:      '#2E6080',
      border:     '#003050',
    },
    fonts: {
      heading: "'Exo 2', sans-serif",
      body:    "'Exo 2', sans-serif",
      google:  'family=Exo+2:wght@400;500;600;700;800',
    },
  },

  //  31 
  {
    id: 'blossom',
    name: 'Blossom Pink',
    description: 'Soft blooms, gentle and feminine',
    category: 'Light',
    colors: {
      primary:    '#EC4899',
      secondary:  '#F9A8D4',
      accent:     '#7C3AED',
      background: '#FFF0F6',
      surface:    '#FFFFFF',
      text:       '#500724',
      muted:      '#C47298',
      border:     '#FBCFE8',
    },
    fonts: {
      heading: "'Josefin Sans', sans-serif",
      body:    "'Josefin Sans', sans-serif",
      google:  'family=Josefin+Sans:wght@300;400;600;700',
    },
  },

  //  32 
  {
    id: 'ink-paper',
    name: 'Ink and Paper',
    description: 'Classic print, the smell of books',
    category: 'Light',
    colors: {
      primary:    '#1A1A2E',
      secondary:  '#16213E',
      accent:     '#E94560',
      background: '#FAFAF8',
      surface:    '#F3F0E8',
      text:       '#1A1A2E',
      muted:      '#6B6560',
      border:     '#D4CDB8',
    },
    fonts: {
      heading: "'Libre Baskerville', Georgia, serif",
      body:    "'Libre Baskerville', Georgia, serif",
      google:  'family=Libre+Baskerville:ital,wght@0,400;0,700;1,400',
    },
  },

  //  33 
  {
    id: 'cyber-wave',
    name: 'Cyber Wave',
    description: 'Lo-fi vaporwave, retrowave heat',
    category: 'Dark',
    colors: {
      primary:    '#FF71CE',
      secondary:  '#01CDFE',
      accent:     '#05FFA1',
      background: '#0A0015',
      surface:    '#15002A',
      text:       '#FFE6FA',
      muted:      '#8040A0',
      border:     '#300050',
    },
    fonts: {
      heading: "'Syne', sans-serif",
      body:    "'Syne', sans-serif",
      google:  'family=Syne:wght@400;500;600;700;800',
    },
  },

  //  34 
  {
    id: 'sage',
    name: 'Sage Garden',
    description: 'Muted greens, quiet morning garden',
    category: 'Light',
    colors: {
      primary:    '#4A7C59',
      secondary:  '#6DAA82',
      accent:     '#C2956C',
      background: '#F4F7F4',
      surface:    '#FFFFFF',
      text:       '#1A2A20',
      muted:      '#7A9985',
      border:     '#C4D8C8',
    },
    fonts: {
      heading: "'DM Serif Display', serif",
      body:    "'DM Sans', system-ui, sans-serif",
      google:  'family=DM+Serif+Display&family=DM+Sans:opsz,wght@9..40,400;500;600;700',
    },
  },

  //  35 
  {
    id: 'burgundy',
    name: 'Burgundy Wine',
    description: 'Deep vintage reds, cellar mystique',
    category: 'Dark',
    colors: {
      primary:    '#9B2335',
      secondary:  '#C0392B',
      accent:     '#E8A87C',
      background: '#08020A',
      surface:    '#140610',
      text:       '#F5E6E8',
      muted:      '#7A4050',
      border:     '#2A0818',
    },
    fonts: {
      heading: "'Cinzel', serif",
      body:    "'Raleway', sans-serif",
      google:  'family=Cinzel:wght@400;600;700&family=Raleway:wght@400;500;600',
    },
  },

  //  36 
  {
    id: 'clear-sky',
    name: 'Clear Sky',
    description: 'Cerulean blues, breezy afternoon',
    category: 'Light',
    colors: {
      primary:    '#0284C7',
      secondary:  '#38BDF8',
      accent:     '#F97316',
      background: '#F0F9FF',
      surface:    '#FFFFFF',
      text:       '#0C2340',
      muted:      '#4E90B8',
      border:     '#BAE6FD',
    },
    fonts: {
      heading: "'Fredoka One', cursive",
      body:    "'Nunito', sans-serif",
      google:  'family=Fredoka+One&family=Nunito:wght@400;600;700',
    },
  },

  //  37 
  {
    id: 'espresso',
    name: 'Espresso',
    description: 'Rich coffee tones, focused and warm',
    category: 'Dark',
    colors: {
      primary:    '#C8963E',
      secondary:  '#A0724A',
      accent:     '#E8CBA0',
      background: '#0E0804',
      surface:    '#1C1408',
      text:       '#F5ECD8',
      muted:      '#8A6848',
      border:     '#2C2010',
    },
    fonts: {
      heading: "'Oswald', sans-serif",
      body:    "'Source Sans 3', sans-serif",
      google:  'family=Oswald:wght@400;500;600;700&family=Source+Sans+3:wght@400;600',
    },
  },

  //  38 
  {
    id: 'storm',
    name: 'Stormy Night',
    description: 'Electric grey, turbulent atmosphere',
    category: 'Dark',
    colors: {
      primary:    '#94A3B8',
      secondary:  '#64748B',
      accent:     '#38BDF8',
      background: '#0A0C10',
      surface:    '#141820',
      text:       '#E2E8F0',
      muted:      '#475569',
      border:     '#1E2530',
    },
    fonts: {
      heading: "'Montserrat', sans-serif",
      body:    "'Open Sans', sans-serif",
      google:  'family=Montserrat:wght@400;600;700;800&family=Open+Sans:wght@400;600',
    },
  },

  //  39 
  {
    id: 'lime',
    name: 'Lime Splash',
    description: 'Acidic energy, zesty and sharp',
    category: 'Light',
    colors: {
      primary:    '#65A30D',
      secondary:  '#84CC16',
      accent:     '#EAB308',
      background: '#F7FEE7',
      surface:    '#FFFFFF',
      text:       '#1A2E05',
      muted:      '#6B8050',
      border:     '#D9F99D',
    },
    fonts: {
      heading: "'Righteous', cursive",
      body:    "'Righteous', cursive",
      google:  'family=Righteous',
    },
  },

  //  40 
  {
    id: 'galaxy',
    name: 'Galaxy',
    description: 'Cosmic dust, infinite perspective',
    category: 'Dark',
    colors: {
      primary:    '#A78BFA',
      secondary:  '#60A5FA',
      accent:     '#F472B6',
      background: '#03010A',
      surface:    '#0A0518',
      text:       '#EDE9FE',
      muted:      '#5B4FA0',
      border:     '#1A1240',
    },
    fonts: {
      heading: "'Unbounded', sans-serif",
      body:    "'Inter', system-ui, sans-serif",
      google:  'family=Unbounded:wght@400;600;700;900&family=Inter:wght@400;500;600',
    },
  },

  //  41 
  {
    id: 'peach',
    name: 'Peach Cream',
    description: 'Peachy glow, soft summer afternoon',
    category: 'Light',
    colors: {
      primary:    '#F97316',
      secondary:  '#FB923C',
      accent:     '#EC4899',
      background: '#FFF7ED',
      surface:    '#FFFFFF',
      text:       '#431407',
      muted:      '#A07058',
      border:     '#FED7AA',
    },
    fonts: {
      heading: "'Satisfy', cursive",
      body:    "'Open Sans', sans-serif",
      google:  'family=Satisfy&family=Open+Sans:wght@400;600',
    },
  },

  //  42 
  {
    id: 'slate-blue',
    name: 'Slate Blue',
    description: 'Muted blues, minimal and focused',
    category: 'Dark',
    colors: {
      primary:    '#6366F1',
      secondary:  '#818CF8',
      accent:     '#34D399',
      background: '#0F1018',
      surface:    '#1A1C28',
      text:       '#E0E7FF',
      muted:      '#4B5280',
      border:     '#252840',
    },
    fonts: {
      heading: "'Space Grotesk', sans-serif",
      body:    "'Space Grotesk', sans-serif",
      google:  'family=Space+Grotesk:wght@300;400;500;600;700',
    },
  },

  //  43 
  {
    id: 'rose-quartz',
    name: 'Rose Quartz',
    description: 'Crystal rose, healing energy',
    category: 'Light',
    colors: {
      primary:    '#E879A0',
      secondary:  '#FB7185',
      accent:     '#A78BFA',
      background: '#FFF5F7',
      surface:    '#FFFFFF',
      text:       '#3D0020',
      muted:      '#B07090',
      border:     '#FECDD3',
    },
    fonts: {
      heading: "'Abril Fatface', serif",
      body:    "'Poppins', sans-serif",
      google:  'family=Abril+Fatface&family=Poppins:wght@400;500;600;700',
    },
  },

  //  44 
  {
    id: 'phosphor',
    name: 'Phosphor',
    description: 'Terminal green, hacker aesthetic',
    category: 'Dark',
    colors: {
      primary:    '#22C55E',
      secondary:  '#4ADE80',
      accent:     '#FACC15',
      background: '#010A03',
      surface:    '#051A0A',
      text:       '#DCFCE7',
      muted:      '#2D6B40',
      border:     '#0A3018',
    },
    fonts: {
      heading: "'Exo 2', sans-serif",
      body:    "'Exo 2', sans-serif",
      google:  'family=Exo+2:wght@400;500;600;700;800',
    },
  },

  //  45 
  {
    id: 'caramel',
    name: 'Caramel Macchiato',
    description: 'Layered browns, coffee shop comfort',
    category: 'Light',
    colors: {
      primary:    '#92400E',
      secondary:  '#B45309',
      accent:     '#D97706',
      background: '#FEFCE8',
      surface:    '#FFFFFF',
      text:       '#292524',
      muted:      '#8A7060',
      border:     '#FDE68A',
    },
    fonts: {
      heading: "'Lobster', cursive",
      body:    "'Lato', sans-serif",
      google:  'family=Lobster&family=Lato:wght@400;700',
    },
  },

  //  46 
  {
    id: 'void',
    name: 'Void',
    description: 'Empty space, radically minimal',
    category: 'Dark',
    colors: {
      primary:    '#E2E8F0',
      secondary:  '#94A3B8',
      accent:     '#38BDF8',
      background: '#000000',
      surface:    '#0A0A0A',
      text:       '#F8FAFC',
      muted:      '#334155',
      border:     '#1E293B',
    },
    fonts: {
      heading: "'Syne', sans-serif",
      body:    "'Syne', sans-serif",
      google:  'family=Syne:wght@400;500;600;700;800',
    },
  },

  //  47 
  {
    id: 'spring',
    name: 'Spring Meadow',
    description: 'Wildflowers blooming, cheerful greens',
    category: 'Light',
    colors: {
      primary:    '#16A34A',
      secondary:  '#22C55E',
      accent:     '#EAB308',
      background: '#F0FDF4',
      surface:    '#FFFFFF',
      text:       '#14532D',
      muted:      '#4B7A58',
      border:     '#BBF7D0',
    },
    fonts: {
      heading: "'Fredoka One', cursive",
      body:    "'Nunito', sans-serif",
      google:  'family=Fredoka+One&family=Nunito:wght@400;600;700',
    },
  },

  //  48 
  {
    id: 'noir',
    name: 'Film Noir',
    description: 'Black and white drama, cinematic shadow',
    category: 'Dark',
    colors: {
      primary:    '#D4D4D4',
      secondary:  '#A3A3A3',
      accent:     '#EAB308',
      background: '#000000',
      surface:    '#111111',
      text:       '#FAFAFA',
      muted:      '#525252',
      border:     '#262626',
    },
    fonts: {
      heading: "'Cinzel', serif",
      body:    "'Raleway', sans-serif",
      google:  'family=Cinzel:wght@400;600;700&family=Raleway:wght@400;500;600',
    },
  },

  //  49 
  {
    id: 'sand-dune',
    name: 'Sand Dune',
    description: 'Shifting sands, warm neutral elegance',
    category: 'Light',
    colors: {
      primary:    '#78716C',
      secondary:  '#A8A29E',
      accent:     '#F59E0B',
      background: '#FAFAF8',
      surface:    '#F5F5F0',
      text:       '#1C1917',
      muted:      '#9A8F8A',
      border:     '#E7E5E0',
    },
    fonts: {
      heading: "'DM Serif Display', serif",
      body:    "'DM Sans', system-ui, sans-serif",
      google:  'family=DM+Serif+Display&family=DM+Sans:opsz,wght@9..40,400;500;600;700',
    },
  },

  //  50 
  {
    id: 'solar-flare',
    name: 'Solar Flare',
    description: 'Coronal plasma, raw stellar energy',
    category: 'Dark',
    colors: {
      primary:    '#FBBF24',
      secondary:  '#F97316',
      accent:     '#EF4444',
      background: '#0A0400',
      surface:    '#160A00',
      text:       '#FEF9C3',
      muted:      '#856020',
      border:     '#2A1800',
    },
    fonts: {
      heading: "'Unbounded', sans-serif",
      body:    "'Inter', system-ui, sans-serif",
      google:  'family=Unbounded:wght@400;600;700;900&family=Inter:wght@400;500;600',
    },
  },

]

export default THEMES