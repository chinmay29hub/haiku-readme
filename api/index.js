const { generateHaiku } = require('../lib/haiku');
const { generateSvg } = require('../lib/svg');

module.exports = (req, res) => {
  try {
    const { theme = 'catppuccin_mocha', type = 'vertical', border = 'true', refresh = 'false' } = req.query;
    const layout = ['vertical', 'horizontal', 'compact'].includes(type) ? type : 'vertical';
    const useBorder = border === 'true';
    const forceRefresh = refresh === 'true';

    const haiku = generateHaiku(forceRefresh);
    const svg = generateSvg(haiku, { theme, layout, border: useBorder });

    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', forceRefresh ? 'no-cache' : 'public, max-age=86400');
    res.status(200).send(svg);
  } catch (error) {
    console.error('Error generating haiku:', error);
    res.setHeader('Content-Type', 'image/svg+xml');
    res.status(500).send('<svg width="300" height="100"><text x="10" y="20" fill="#fff">Error generating haiku</text></svg>');
  }
};