import React from 'react';
import './App.css';

import { countNumberOfConnection } from './../services/socket.js';

class App extends React.Component {
  state = {
    numberOfConnection: 0,
  };

  componentDidMount() {
    countNumberOfConnection(numberOfConnection =>
      this.setState({ numberOfConnection })
    );
  }

  render() {
    return (
      <div className="App">
        <div>Number of connections = {this.state.numberOfConnection}</div>
      </div>
    );
  }
}

export default App;
