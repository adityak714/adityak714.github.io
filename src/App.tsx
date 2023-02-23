import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Currently in progress ...
        </h1>
        <p>
          Aditya Khadkikar's Portfolio Website is being built here.
        </p>
    </div>
  );
}

export default App;
