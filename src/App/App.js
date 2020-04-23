import React from 'react';

import Navigation from "../Navigation/Nav";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Navigation className="App-header"/>
      <main className="App-content">
        <h1>Hi</h1>
      </main>
    </div>
  );
}

export default App;
