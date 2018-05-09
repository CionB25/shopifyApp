import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="box">
          <div className="header">
            <h2 className="title">Stay up to date with ecommerce trends  with Shopify's Newsletter</h2>
            <p className="dash">__</p>
          </div>

          <form>
            <p className="free-tips">Subscribe for free marketing tips</p>
            <span className="inputs">
              <input className="email-biz" style={{float:"left"}} value="Email Address"/>
              <input className="dropdown" style={{float:"right"}} value="Interested in..."/>
            </span>
              <div>
                <button>Sign up now</button>
              </div>


          </form>

            <div className="thanks">
              <h3>Thanks for subscribing</h3>
              <p>You'll start receiving free tips and resources soon.</p>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
// <div>
//   < button>Submitting...</button>
// </div>
