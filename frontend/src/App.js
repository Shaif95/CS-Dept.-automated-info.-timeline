import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";

class App extends Component {
  state = {
    events: []
  };

  async componentDidMount() {
    const response = await fetch('/events');
    const body = await response.json();
    this.setState({events: body});
  }

  render() {
    const {events} = this.state;
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="App-intro">
              <h2>Events</h2>
              {events.map(event =>
                  <div key={event.id}>
                    {event.title} ({event.coordinator})
                  </div>
              )}
            </div>
          </header>
        </div>
    );
  }
}
export default App;
