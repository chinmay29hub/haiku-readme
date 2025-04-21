import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>HaikuReadme</h1>
      <p>Generate tech-themed haiku SVGs for your GitHub Profile README.</p>
      <img
        src="https://chinmay29hub-haiku-readme.vercel.app/api?theme=catppuccin_mocha&type=vertical&border=true&t=12345"
        alt="Sample Haiku"
      />
      <p>
        See the <a href="https://github.com/chinmay29hub/haiku-readme">GitHub repo</a> for usage instructions.
      </p>
    </div>
  );
}

export default App;