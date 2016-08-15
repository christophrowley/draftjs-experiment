import React, { Component } from 'react';
import DraftInput from './components/draft-input.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Draft-js</h1>
        <DraftInput />
      </div>
    );
  }
}

export default App;
