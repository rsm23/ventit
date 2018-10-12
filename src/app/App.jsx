import React, { Component } from 'react';
import Navigation from './layout/Navigation'
class App extends Component {
  render() {
    return (
      <div>
      <Navigation/>
        <div className="container mx-auto mt-5">
            <h1>Vent-it</h1>
        </div>
      </div>
    );
  }
}

export default App;
