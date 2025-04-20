const themes = {
    catppuccin_mocha: { background: '#302c4e', text: '#ffffff' },
    dark: { background: '#1a1a1a', text: '#d4d4d4' },
    dracula: { background: '#282a36', text: '#f8f8f2' }
  };
  
  function generateSvg(haiku, { theme = 'catppuccin_mocha', layout = 'vertical', border = true }) {
    // Layout configurations
    const layouts = {
      vertical: { width: 300, height: 400, fontSize: 16, lineSpacing: 24, textY: 100 },
      horizontal: { width: 600, height: 150, fontSize: 16, lineSpacing: 24, textY: 40 },
      compact: { width: 200, height: 200, fontSize: 14, lineSpacing: 18, textY: 50 }
    };
  
    const config = layouts[layout] || layouts.vertical;
    const colors = themes[theme] || themes.catppuccin_mocha;
  
    // Escape HTML characters to prevent XSS
    const escapeHtml = (str) => {
      return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
    };
  
    // Split haiku into lines
    const lines = haiku.split('\n').map(line => escapeHtml(line));
  
    // Generate SVG
    let svg = `
      <svg width="${config.width}" height="${config.height}" xmlns="http://www.w3.org/2000/svg">
        <!-- Background -->
        <rect width="${config.width}" height="${config.height}" fill="${colors.background}" />
        <!-- Text -->
    `;
  
    lines.forEach((line, i) => {
      const y = config.textY + i * config.lineSpacing;
      svg += `
        <text x="10" y="${y}" fill="${colors.text}" font-family="monospace" font-size="${config.fontSize}">${line}</text>
      `;
    });
  
    // Border
    if (border) {
      svg += `
        <rect width="${config.width - 2}" height="${config.height - 2}" x="1" y="1" fill="none" stroke="${colors.text}" stroke-width="1" />
      `;
    }
  
    // Accessibility
    svg += `
        <title>Tech-themed haiku</title>
      </svg>
    `;
  
    return svg.trim();
  }
  
  module.exports = { generateSvg };