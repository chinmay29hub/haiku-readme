require('dotenv').config();
const http = require('http');
const { generateHaiku } = require('../lib/haiku');
const { generateSvg } = require('../lib/svg');

// Serverless function for Vercel
const serverlessHandler = (req, res) => {
  try {
    const { theme = 'catppuccin_mocha', type = 'vertical', border = 'true', refresh = 'false' } = req.query;
    const layout = ['vertical', 'horizontal', 'compact'].includes(type) ? type : 'vertical';
    const useBorder = border === 'true';
    const forceRefresh = refresh === 'true';

    const haiku = generateHaiku(forceRefresh);
    const svg = generateSvg(haiku, { theme, layout, border: useBorder });

    res.setHeader('Content-Type', 'image/svg+xml');
    if (forceRefresh) {
      res.setHeader('Cache-Control', 'no-cache');
    }
    res.status(200).send(svg);
  } catch (error) {
    console.error('Error generating haiku:', error);
    res.setHeader('Content-Type', 'image/svg+xml');
    res.status(500).send('<svg width="300" height="100"><text x="10" y="20" fill="#fff">Error generating haiku</text></svg>');
  }
};

// Local server for development
const localServer = () => {
  const server = http.createServer((req, res) => {
    try {
      const url = new URL(req.url, `http://${req.headers.host}`);
      const { theme = 'catppuccin_mocha', type = 'vertical', border = 'true', refresh = 'false' } = Object.fromEntries(url.searchParams);
      const layout = ['vertical', 'horizontal', 'compact'].includes(type) ? type : 'vertical';
      const useBorder = border === 'true';
      const forceRefresh = refresh === 'true';

      const haiku = generateHaiku(forceRefresh);
      const svg = generateSvg(haiku, { theme, layout, border: useBorder });

      res.setHeader('Content-Type', 'image/svg+xml');
      res.writeHeader(200);
      res.end(svg);
    } catch (error) {
      console.error('Error:', error);
      res.setHeader('Content-Type', 'image/svg+xml');
      res.writeHeader(500);
      res.end('<svg width="300" height="100"><text x="10" y="20" fill="#fff">Error generating haiku</text></svg>');
    }
  });

  server.listen(3000, () => console.log('Server running at http://localhost:3000'));
};

// Run local server in development, export serverless function for production
if (process.env.NODE_ENV === 'development') {
  localServer();
} else {
  module.exports = serverlessHandler;
}