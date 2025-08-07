const themes = {
  catppuccin_mocha: {
    background: '#302c4e',
    text: '#ffffff',
    border: '#f5c2e7',
  },
  dark: {
    background: '#1a1a1a',
    text: '#d4d4d4',
    border: '#bb86fc',
  },
  dracula: {
    background: '#282a36',
    text: '#f8f8f2',
    border: '#ff79c6',
  },
  nord: {
    background: '#2e3440',
    text: '#eceff4',
    border: '#88c0d0',
  },
  tokyo_night: {
    background: '#1a1b26',
    text: '#c0caf5',
    border: '#7aa2f7',
  },
  solarized_dark: {
    background: '#002b36',
    text: '#839496',
    border: '#b58900',
  },
  gruvbox_dark: {
    background: '#282828',
    text: '#ebdbb2',
    border: '#fabd2f',
  },
  cyberpunk: {
    background: '#0f0f0f',
    text: '#ff00f7',
    border: '#00fff7',
  },
  velvet_dusk: {
    background: '#342e37',
    text: '#eae0d5',
    border: '#c6a57b',
  },
  solar_flare: {
    background: '#1e1a0f',
    text: '#ffdd57',
    border: '#ff4500',
  },
};

const fonts = {
  Roboto: {
    import:
      "@import url('https://fonts.googleapis.com/css2?family=Roboto&amp;display=swap');",
    family: 'Roboto, sans-serif',
  },
  Inconsolata: {
    import:
      "@import url('https://fonts.googleapis.com/css2?family=Inconsolata&amp;display=swap');",
    family: 'Inconsolata, monospace',
  },
<<<<<<< HEAD
  Arial: {
=======
  'Poppins': {
  import: "@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');",
  family: 'Poppins, sans-serif'
},

  'Arial': {
>>>>>>> 5737a5ff3257262daba31ec11a2bebc7592ee0db
    import: '', // Web-safe
    family: 'Arial, sans-serif',
  },
  'Courier New': {
    import: '', // Web-safe
    family: '"Courier New", monospace',
  },
  Georgia: {
    import: '', // Web-safe
    family: 'Georgia, serif',
  },
  'Comic Sans MS': {
    import: '', // Web-safe
    family: '"Comic Sans MS", cursive, sans-serif',
  },
  Lobster: {
    import:
      "@import url('https://fonts.googleapis.com/css2?family=Lobster&amp;display=swap');",
    family: "'Lobster', cursive",
  },
  Oswald: {
    import:
      "@import url('https://fonts.googleapis.com/css2?family=Oswald&amp;display=swap');",
    family: "'Oswald', sans-serif",
  },
  'Indie Flower': {
    import:
      "@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&amp;display=swap');",
    family: "'Indie Flower', cursive",
  },
  'Fira Code': {
    import:
      "@import url('https://fonts.googleapis.com/css2?family=Fira+Code&amp;display=swap');",
    family: "'Fira Code', monospace",
  },
  "Impact": {
    import: '',
    family: 'Impact, Charcoal, sans-serif',
  },
  "JetBrains Mono": {
    import: "@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap');",
    family: "'JetBrains Mono', monospace"
  }
};

function generateSvg(
  haiku,
  {
    theme = 'catppuccin_mocha',
    layout = 'vertical',
    border = true,
    font = 'Fira Code',
  }
) {
  const layouts = {
    vertical: {
      width: 330,
      height: 300,
      fontSize: 16,
      lineSpacing: 24,
    },
    horizontal: {
      width: 600,
      height: 150,
      fontSize: 16,
      lineSpacing: 24,
    },
    compact: {
      width: 200,
      height: 200,
      fontSize: 14,
      lineSpacing: 18,
    },
  };

  const config = layouts[layout] || layouts.vertical;
  const colors = themes[theme] || themes.catppuccin_mocha;
  const paddingX = 16;

  const selectedFont = fonts[font] || {
    import: '',
    family: 'Fira Code, monospace',
  };

  const escapeHtml = (str) =>
    str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');

  const lines = haiku.split('\n').map((line) => escapeHtml(line));
  const totalTextHeight = lines.length * config.lineSpacing;
  const textY = (config.height - totalTextHeight) / 2 + config.fontSize;

  const safeImport = selectedFont.import.replace(/&/g, '&amp;');

  let svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${config.width}" height="${config.height}" xmlns="http://www.w3.org/2000/svg">
  <!-- Font import if needed -->
  <style>
    ${safeImport}
  </style>
  <!-- Background with optional border -->
  <rect
    width="${config.width - 2}"
    height="${config.height - 2}"
    x="1"
    y="1"
    fill="${colors.background}"
    stroke="${border ? colors.border : 'none'}"
    stroke-width="4"
    rx="10"
  />
`;

  lines.forEach((line, i) => {
    const y = textY + i * config.lineSpacing;
    svg += `
    <text 
      x="${paddingX}" 
      y="${y}" 
      fill="${colors.text}" 
      font-family="${selectedFont.family}" 
      font-size="${config.fontSize}" 
      text-anchor="start"
    >${line}</text>
    `;
  });

  svg += `
  <title>Tech-themed haiku</title>
</svg>`;

  return svg.trim();
}

module.exports = { generateSvg };
