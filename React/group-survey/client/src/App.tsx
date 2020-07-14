import React from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/Shared/Input/Input';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload test BIG OOF.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <Input type="email" placeholder="oof"/>
    </div>
  );
}

export default App;
