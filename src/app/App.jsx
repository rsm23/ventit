import React, { Component } from 'react';
import Navigation from './layout/Navigation'
import EventDashboard from '../features/events/dashboard/EventDashboard'


class App extends Component {
  render() {
    return (
      <div>
      <Navigation/>
        <div className="container mx-auto">
            <EventDashboard/>
        </div>
      </div>
    );
  }
}

export default App;
