import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Here's a link to the repository:
        </p>
        <a
          href="https://github.com/Sean-Andrew-Stanek/letsmeet"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} className="App-logo" alt="logo" /><br/>
          LetsMeet GitHub Repository
        </a>
      </header>
    </div>
  );
}

export default App;
