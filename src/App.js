import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Carossel from './components/Carossel'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
       <Carossel/>
      </div>
    );
  }
}

export default App;
