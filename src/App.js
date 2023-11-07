import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Here's a link to the repository:
        </p>
        <a
          href="https://github.com/Sean-Andrew-Stanek/letsmeet"
          target="_blank"
          rel="noopener noreferrer"
        >
          LetsMeet GitHub Repository
        </a>
      </header>
    </div>
  );
}

export default App;
