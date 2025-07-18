import { useState } from 'react';
import './App.css';

function App() {
  const [theme, setTheme] = useState('catppuccin_mocha');
  const [type, setType] = useState('vertical');
  const [border, setBorder] = useState(true);

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

  const handleDownloadSvg = async () => {
    try {
      // Fetch the raw SVG
      const res = await fetch(svgUrl);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const svgText = await res.text();

      // Make a Blob and object URL
      const blob = new Blob([svgText], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);

      // Build a timestamped filename
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const filename = `haiku-${theme}-${type}-${timestamp}.svg`;

      // Create a hidden <a> and click it
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      // Cleanup
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Download failed', err);
      alert('Failed to download SVG. See console.');
    }
  };

  // Update theme, type, and border at random.
  const randomizeAppearance = () => {
    setTheme(themes[Math.floor(Math.random() * themes.length)]);
    setType(types[Math.floor(Math.random() * types.length)]);
    setBorder(Math.round(Math.random()) === 1 ? true : false);
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
        <img
          src={svgUrl}
          alt="Haiku SVG"
          onError={() => alert('Failed to load SVG')}
        />
        <button onClick={handleDownloadSvg}>Download SVG</button>
      </div>

      <div className="markdown">
        <h2>Markdown for README</h2>
        <pre>{markdownUrl}</pre>
        <button onClick={copyToClipboard}>Copy Markdown</button>
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
