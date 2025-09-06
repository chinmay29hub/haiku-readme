import { useState, useEffect } from 'react';
import './App.css';
import {
  TwitterShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterIcon,
  FacebookIcon,
  LinkedinIcon,
} from 'react-share';
import { ClipLoader } from 'react-spinners';

function App() {
  const [theme, setTheme] = useState('catppuccin_mocha');
  const [type, setType] = useState('vertical');
  const [border, setBorder] = useState(true);
  const [font, setFont] = useState('Fira Code');
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);

  // Spinner styles
  const SPINNER_COLOR = '#36d7b7';
  const SPINNER_SIZE = 50;

  const themes = [
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
  const types = ['vertical', 'horizontal', 'compact'];
  const fonts = [
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

  // Custom URL encoding function that uses + for spaces
  const encodeFontParam = (fontName) => {
    return fontName.replace(/ /g, '+');
  };

  const svgUrl = `${import.meta.env.VITE_API_URL}/api?theme=${theme}&type=${type}&border=${border}&font=${encodeFontParam(font)}&t=${Date.now()}`;
  const markdownUrl = `![HaikuReadme](${svgUrl})`;

  const copyToClipboard = () => {
    // Try modern clipboard API
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(markdownUrl)
        .then(() => {
          setCopySuccess(true);
          setTimeout(() => setCopySuccess(false), 2000);
        })
        .catch(() => {
          // Fallback for mobile
          const textarea = document.createElement('textarea');
          textarea.value = markdownUrl;
          document.body.appendChild(textarea);
          textarea.select();
          try {
            document.execCommand('copy');
            setCopySuccess(true);
            setTimeout(() => setCopySuccess(false), 2000);
          } catch (err) {
            void err;
            alert('Failed to copy. Please copy manually.');
          }
          document.body.removeChild(textarea);
        });
    } else {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = markdownUrl;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      } catch (err) {
        void err;
        alert('Failed to copy. Please copy manually.');
      }
      document.body.removeChild(textarea);
    }
  };

  // Update theme, type, border, and font at random.
  const randomizeAppearance = () => {
    setTheme(themes[Math.floor(Math.random() * themes.length)]);
    setType(types[Math.floor(Math.random() * types.length)]);
    setBorder(Math.round(Math.random()) === 1 ? true : false);
    setFont(fonts[Math.floor(Math.random() * fonts.length)]);
  };

  useEffect(() => {
    setIsLoading(true);
  }, [theme, type, border, font]);

  const handleImageError = (error) => {
    setIsLoading(false);

    const img = error.target;
    if (img && img.src) {
      fetch('/api/help', {
        method: 'GET',
        cache: 'no-cache',
      })
        .then((response) => {
          if (response.ok) {
            // Server is reachable, so the original error was likely a rate limit
            setErrorMessage(
              '⏰ Rate limit reached! Please wait a few minutes before generating more haikus.'
            );
          } else {
            setErrorMessage('❌ Failed to load haiku. Please try again.');
          }
        })
        .catch(() => {
          // Server is not reachable, so it's a network error
          setErrorMessage(
            '❌ Network error. Please check your connection and try again.'
          );
        });
    } else {
      setErrorMessage('❌ Failed to load SVG');
    }
  };

  const handleImageLoad = () => {
    setIsLoading(false);
    setErrorMessage(''); // Clear any previous error messages
  };

  return (
    <div className="App">
      <header>
        <h1>HaikuReadme</h1>
        <p>Create tech-themed haiku SVGs for your GitHub README</p>
      </header>

      <div className="controls">
        <div className="control-group">
          <label>Theme:</label>
          <select value={theme} onChange={(e) => setTheme(e.target.value)}>
            {themes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div className="control-group">
          <label>Type:</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            {types.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div className="control-group">
          <label>Font:</label>
          <select value={font} onChange={(e) => setFont(e.target.value)}>
            {fonts.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </div>
        <div className="control-group">
          <label>Border:</label>
          <div className="checkbox-container">
            <input
              type="checkbox"
              checked={border}
              onChange={(e) => setBorder(e.target.checked)}
            />
            <label>Enable Border</label>
          </div>
        </div>
        <div className="control-group">
          <label>Randomize:</label>
          <button onClick={randomizeAppearance}>Randomize</button>
        </div>
      </div>

      <div className="preview">
        <h2>Preview</h2>

        {isLoading && (
          <div className="spinner-container">
            <ClipLoader color={SPINNER_COLOR} size={SPINNER_SIZE} />
            <p>Generating your haiku...</p>
          </div>
        )}

        {errorMessage && (
          <div className="error-message">
            <p>{errorMessage}</p>
            <button
              onClick={() => {
                setErrorMessage('');
                setIsLoading(true);
                // Force reload by updating timestamp
                window.location.reload();
              }}
            >
              Try Again
            </button>
          </div>
        )}

        <img
          className={isLoading || errorMessage ? 'hide-haiku' : ''}
          src={svgUrl}
          alt="Haiku SVG"
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      </div>

      <div className="markdown">
        <h2>Markdown for README</h2>
        <pre>{markdownUrl}</pre>
        <button
          onClick={copyToClipboard}
          className={copySuccess ? 'copy-success' : ''}
        >
          {copySuccess ? '✓ Copied!' : 'Copy Markdown'}
        </button>
        {svgUrl ? (
          <div className="share-buttons">
            <TwitterShareButton url={svgUrl} title="Check out my GitHub Haiku!">
              <TwitterIcon size={32} round />
            </TwitterShareButton>

            <FacebookShareButton url={svgUrl} quote="My GitHub Haiku">
              <FacebookIcon size={32} round />
            </FacebookShareButton>

            <LinkedinShareButton
              url={svgUrl}
              summary="A custom haiku from HaikuReadme"
            >
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
          </div>
        ) : (
          <p>Please generate a haiku to enable sharing.</p>
        )}
      </div>

      <footer>
        <p>
          Check out the{' '}
          <a
            href="https://github.com/chinmay29hub/haiku-readme"
            target="_blank"
            rel="noreferrer"
          >
            GitHub repo
          </a>{' '}
          for more details.
        </p>
      </footer>
    </div>
  );
}

export default App;
