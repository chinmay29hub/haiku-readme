require('dotenv').config();
const express = require('express');
const path = require('path');
const { generateHaiku } = require('./lib/haiku');
const { generateSvg } = require('./lib/svg');
const loggerMiddleware = require('./middleware/logging/logging.middleware');
const app = express();
const rateLimit = require('express-rate-limit');

// Trust proxy for Vercel deployment
app.set('trust proxy', 1);

const requestsLimit = Number(process.env.REQUESTS_LIMIT) || 100;
const timeLimit = Number(process.env.RATE_LIMIT_MINUTES) || 15;

const limiter = rateLimit({
  windowMs: timeLimit * 60 * 1000,
  limit: requestsLimit,
  standardHeaders: 'draft-8',
  legacyHeaders: false,
  ipv6Subnet: 56,
});

// Logger middleware
app.use(loggerMiddleware);

// Serve static files from frontend/dist
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Apply limiter to incoming requests
app.use(limiter);

// Validation constants
const VALID_THEMES = [
  'catppuccin_mocha',
  'dark',
  'dracula',
  'nord',
  'tokyo_night',
  'solarized_dark',
  'gruvbox_dark',
  'cyberpunk',
  'velvet_dusk',
  'solar_flare',
];

const VALID_TYPES = ['vertical', 'horizontal', 'compact'];

const VALID_BORDER_VALUES = ['true', 'false'];

const VALID_FONTS = [
  'Fira Code',
  'Roboto',
  'Inconsolata',
  'Arial',
  'Courier New',
  'Comic Sans MS',
  'Lobster',
  'Oswald',
  'Indie Flower',
  'Impact',
  'JetBrains Mono',
];

// Validation helper functions
const validateQueryParams = (query) => {
  const errors = [];
  const { theme, type, border, font } = query;

  // Validate theme
  if (theme && !VALID_THEMES.includes(theme)) {
    errors.push(
      `❌ Invalid theme: "${theme}" | ✅ Valid themes: ${VALID_THEMES.join(', ')}`
    );
  }

  // Validate type
  if (type && !VALID_TYPES.includes(type)) {
    errors.push(
      `❌ Invalid type: "${type}" | ✅ Valid types: ${VALID_TYPES.join(', ')}`
    );
  }

  // Validate border
  if (border && !VALID_BORDER_VALUES.includes(border)) {
    errors.push(
      `❌ Invalid border: "${border}" | ✅ Valid values: ${VALID_BORDER_VALUES.join(', ')}`
    );
  }

  // Validate font
  if (font && !VALID_FONTS.includes(font)) {
    errors.push(
      `❌ Invalid font: "${font}" | ✅ Valid fonts: ${VALID_FONTS.join(', ')}`
    );
  }

  return errors;
};

const createErrorSvg = (message, width = 600, height = 150) => {
  // Parse the message to separate invalid values from valid ones
  const processMessage = (msg) => {
    // Split by semicolon first to handle multiple errors
    const errors = msg.split('; ');
    const processedLines = [];

    errors.forEach((error) => {
      if (error.includes('❌') && error.includes('✅')) {
        // Split into invalid and valid parts
        const [invalidPart, validPart] = error.split(' | ');
        processedLines.push({ text: invalidPart, type: 'invalid' });
        processedLines.push({ text: validPart, type: 'valid' });
      } else {
        processedLines.push({ text: error, type: 'normal' });
      }
    });

    return processedLines;
  };

  const messageLines = processMessage(message);

  // Calculate dynamic height based on content
  const lineHeight = 18;
  const padding = 20;
  const headerHeight = 30;
  const footerHeight = 40;
  const dynamicHeight = Math.max(
    height,
    headerHeight + messageLines.length * lineHeight + footerHeight + padding
  );

  let svgContent = `<svg width="${width}" height="${dynamicHeight}" xmlns="http://www.w3.org/2000/svg">
    <!-- Background with lighter red color -->
    <rect width="100%" height="100%" fill="#ff6b6b" stroke="#ff4444" stroke-width="2" rx="8" />
    
    <!-- Error header -->
    <text x="15" y="25" fill="#ffffff" font-family="Arial, sans-serif" font-size="16" font-weight="bold">API Validation Error</text>
    
    <!-- Error message lines -->`;

  // Add each line with appropriate styling
  let currentY = 50;
  messageLines.forEach((line) => {
    let color;
    if (line.type === 'invalid') {
      color = '#ffcccc';
    } else if (line.type === 'valid') {
      color = '#ccffcc';
    } else {
      color = '#ffffff';
    }
    const fontWeight = line.type === 'invalid' ? 'bold' : 'normal';

    // Handle long lines by wrapping text
    const maxCharsPerLine = Math.floor((width - 30) / 7);
    const words = line.text.split(' ');
    const wrappedLines = [];
    let currentLine = '';

    words.forEach((word) => {
      if ((currentLine + word).length <= maxCharsPerLine) {
        currentLine += (currentLine ? ' ' : '') + word;
      } else {
        if (currentLine) wrappedLines.push(currentLine);
        currentLine = word;
      }
    });
    if (currentLine) wrappedLines.push(currentLine);

    wrappedLines.forEach((wrappedLine) => {
      svgContent += `
    <text x="15" y="${currentY}" fill="${color}" font-family="monospace" font-size="12" font-weight="${fontWeight}">${wrappedLine}</text>`;
      currentY += lineHeight;
    });
  });

  // Add footer information
  const footerY = currentY + 20;
  svgContent += `
    
    <!-- Help information -->
    <text x="15" y="${footerY}" fill="#f0f0f0" font-family="Arial, sans-serif" font-size="11">💡 Check API documentation for valid parameters</text>
    <text x="15" y="${footerY + 18}" fill="#f0f0f0" font-family="monospace" font-size="10">📖 Help: /api/help</text>
  </svg>`;

  return svgContent;
};

// API endpoint
app.get('/api', (req, res) => {
  try {
    // Validate query parameters
    const validationErrors = validateQueryParams(req.query);
    if (validationErrors.length > 0) {
      const errorMessage = validationErrors.join('; ');
      console.error('Invalid API parameters:', {
        query: req.query,
        errors: validationErrors,
        timestamp: new Date().toISOString(),
      });

      res.setHeader('Content-Type', 'image/svg+xml');
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      res.status(400).send(createErrorSvg(errorMessage));
      return;
    }

    const {
      theme = 'catppuccin_mocha',
      type = 'vertical',
      border = 'true',
      font = 'Fira Code',
    } = req.query;
    const layout = type;
    const useBorder = border === 'true';

    // Convert + back to spaces for font parameter
    const decodedFont = font.replace(/\+/g, ' ');

    // Debug logging for font parameter
    console.log('Font parameter debug:', {
      raw: req.query.font,
      decoded: decodedFont,
      type: typeof decodedFont,
      length: decodedFont ? decodedFont.length : 0,
      isValid: VALID_FONTS.includes(decodedFont)
    });

    const haiku = generateHaiku();
    const svg = generateSvg(haiku, { theme, layout, border: useBorder, font: decodedFont });

    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.status(200).send(svg);
  } catch (error) {
    console.error('Error generating haiku:', {
      error: error.message,
      stack: error.stack,
      query: req.query,
      timestamp: new Date().toISOString(),
    });
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res
      .status(500)
      .send(createErrorSvg('Internal server error while generating haiku'));
  }
});

// Help endpoint for API documentation
app.get('/api/help', (req, res) => {
  const helpInfo = {
    description: 'HaikuReadme API - Generate tech-themed haiku SVGs',
    endpoint: '/api',
    parameters: {
      theme: {
        description: 'Color theme for the SVG',
        type: 'string',
        default: 'catppuccin_mocha',
        valid_values: VALID_THEMES,
      },
      type: {
        description: 'Layout type for the SVG',
        type: 'string',
        default: 'vertical',
        valid_values: VALID_TYPES,
      },
      border: {
        description: 'Whether to show border around the SVG',
        type: 'boolean',
        default: 'true',
        valid_values: VALID_BORDER_VALUES,
      },
      font: {
        description: 'Font family for the SVG text',
        type: 'string',
        default: 'Fira Code',
        note: 'New feature - font customization',
      },
    },
    examples: [
      '/api?theme=dracula&type=horizontal&border=true',
      '/api?theme=cyberpunk&type=compact&border=false',
      '/api?theme=nord&type=vertical&font=Arial',
    ],
  };

  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(helpInfo);
});

// Serve frontend for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});

// Start server
app.listen(3000, () => console.log('Server running at http://localhost:3000'));
