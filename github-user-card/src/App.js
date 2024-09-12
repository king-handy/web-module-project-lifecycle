import logo from './logo.svg';
import * as React from 'react';
import './App.css';
import { GithubUser } from './components/GithubUser';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <GithubUser />
        </p>
        <a
          className="App-link"
          href="https://twitter.com/home"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
