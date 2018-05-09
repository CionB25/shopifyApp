import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="header">
        <h2 className="title">Stay up to date with ecommerce trends with Shopify\s newsletter</h2>
        <p className="dash">__</p>
      </div>
        <div className="form">
          <h3 className="free-tips">Subscribe for free marketing tips</h3>
          <span>
            <div>
            <input/>
            <p className="email-warning">Please enter valid email address</p>
            </div>
          </span>
          <span>
            <input/>
          </span>
          <div>
          < button>Sign up now</button>
          </div>
          <div>
          < button>Submitting...</button>
          </div>
          <div className="thanks">
            <h3>Thanks for subscribing</h3>
            <p>You--ll start receiving free tips and resources soon.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
