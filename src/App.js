import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link-1"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="App-link-2"
          href="https://www.freecodecamp.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Web Development with Free Code Camp
        </a>
        <a
          className="App-link-3"
          href="https://www.codecademy.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CodeCademy is Paid version of website like Free Code Camp
        </a>


      </header>


    </div>
  );
}

export default App;
