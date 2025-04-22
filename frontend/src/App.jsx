import { useState } from 'react';
import './App.css';

function App() {
  const [theme, setTheme] = useState('catppuccin_mocha');
  const [type, setType] = useState('vertical');
  const [border, setBorder] = useState(true);

  const themes = [
    'catppuccin_mocha', 'dark', 'dracula', 'nord', 'tokyo_night',
    'solarized_dark', 'gruvbox_dark', 'cyberpunk'
  ];
  const types = ['vertical', 'horizontal', 'compact'];

  const svgUrl = `${import.meta.env.VITE_API_URL}/api?theme=${theme}&type=${type}&border=${border}&t=${Date.now()}`;
  const markdownUrl = `![HaikuReadme](${svgUrl})`;

  const copyToClipboard = () => {
    // Try modern clipboard API
    if (navigator.clipboard) {
      navigator.clipboard.writeText(markdownUrl)
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
        alert('Failed to copy. Please copy manually.');
      }
      document.body.removeChild(textarea);
    }
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
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div className="control-group">
          <label>Type:</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            {types.map((t) => (
              <option key={t} value={t}>{t}</option>
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
      </div>

      <div className="preview">
        <h2>Preview</h2>
        <img src={svgUrl} alt="Haiku SVG" onError={() => alert('Failed to load SVG')} />
      </div>

      <div className="markdown">
        <h2>Markdown for README</h2>
        <pre>{markdownUrl}</pre>
        <button onClick={copyToClipboard}>Copy Markdown</button>
      </div>

      <footer>
        <p>
          Check out the <a href="https://github.com/chinmay29hub/haiku-readme" target='_blank'>GitHub repo</a> for more details.
        </p>
      </footer>
    </div>
  );
}

export default App;