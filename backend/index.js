require('dotenv').config();
const express = require('express');
const path = require('path');
const { generateHaiku } = require('./lib/haiku');
const { generateSvg } = require('./lib/svg');
const loggerMiddleware = require('./middleware/logging/logging.middleware');
const app = express();

const rateLimit = require('express-rate-limit');
const requestsLimit = Number(process.env.REQUESTS_LIMIT) || 100;
const timeLimit = Number(process.env.RATE_LIMIT_MINUTES) || 15;

const limiter = rateLimit({
  windowMs: timeLimit * 60 * 1000,
  limit: requestsLimit,
	standardHeaders: 'draft-8',
	legacyHeaders: false, 
	ipv6Subnet: 56, 
})

//logger middleware
app.use(loggerMiddleware);

// Serve static files from frontend/dist
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Apply limiter to incoming requests
app.use(limiter);

// API endpoint
app.get('/api', (req, res) => {
  try {
    const {
      theme = 'catppuccin_mocha',
      type = 'vertical',
      border = 'true',
    } = req.query;
    const layout = ['vertical', 'horizontal', 'compact'].includes(type)
      ? type
      : 'vertical';
    const useBorder = border === 'true';
    // const forceRefresh = refresh === 'true';

    const haiku = generateHaiku();
    const svg = generateSvg(haiku, { theme, layout, border: useBorder });

    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.status(200).send(svg);
  } catch (error) {
    console.error('Error generating haiku:', error);
    res.setHeader('Content-Type', 'image/svg+xml');
    res
      .status(500)
      .send(
        '<svg width="300" height="100"><text x="10" y="20" fill="#fff">Error generating haiku</text></svg>'
      );
  }
});

// Serve frontend for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});

// Start server
app.listen(3000, () => console.log('Server running at http://localhost:3000'));
