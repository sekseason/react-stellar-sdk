import React, { Component } from 'react';
import logo from './logo.svg';

import Demo from './Demo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            The Stella SDK demo via React
          </p>
        </header>

        <Demo />
      </div>
    );
  }
}

export default App;
