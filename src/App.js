import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div>
          <span>
            <div>
            <input/>
            <p>Please enter valid email address</p>
            </div>
          </span>

          <span>
            <input/>
          </span>
          < button className="signup" value="Sign up now">Sign up now</button>
        </div>
      </div>
    );
  }
}

export default App;
