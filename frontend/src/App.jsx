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
  const [isLoading, setIsLoading] = useState(true);

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

  const svgUrl = `${import.meta.env.VITE_API_URL}/api?theme=${theme}&type=${type}&border=${border}&t=${Date.now()}`;
  const markdownUrl = `![HaikuReadme](${svgUrl})`;

  const copyToClipboard = () => {
    // Try modern clipboard API
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(markdownUrl)
        .then(() => alert('Markdown URL copied to clipboard!'))
        .catch(() => {
          // Fallback for mobile
          const textarea = document.createElement('textarea');
          textarea.value = markdownUrl;
          document.body.appendChild(textarea);
          textarea.select();
          try {
            document.execCommand('copy');
            alert('Markdown URL copied to clipboard!');
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
        alert('Markdown URL copied to clipboard!');
      } catch (err) {
        void err;
        alert('Failed to copy. Please copy manually.');
      }
      document.body.removeChild(textarea);
    }
  };

  // Update theme, type, and border at random.
  const randomizeAppearance = () => {
    setTheme(themes[Math.floor(Math.random() * themes.length)]);
    setType(types[Math.floor(Math.random() * types.length)]);
    setBorder(Math.round(Math.random()) === 1 ? true : false);
  };

  useEffect(() => {
    setIsLoading(true);
  }, [theme, type, border]);

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
          <label>Border:</label>
          <input
            type="checkbox"
            checked={border}
            onChange={(e) => setBorder(e.target.checked)}
          />
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
          </div>
        )}

        <img
          className={isLoading ? 'hide-haiku' : ''}
          src={svgUrl}
          alt="Haiku SVG"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            alert('Failed to load SVG');
          }}
        />
      </div>

      <div className="markdown">
        <h2>Markdown for README</h2>
        <pre>{markdownUrl}</pre>
        <button onClick={copyToClipboard}>Copy Markdown</button>
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
