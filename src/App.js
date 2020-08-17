import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi! This website is under construction! Please visit the previous version by clicking   {" "}

          <a
            className="App-link"
            href="http://iltonandrew.me/"
            target="_blank"
            rel="noopener noreferrer"
          >
            here!
        </a>
        </p>
      </header>
    </div>
  );
}

export default App;
