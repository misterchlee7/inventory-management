import React, { Component } from 'react';
import './App.css';

import Layout from './containers/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div>
        <Layout />
      </div>
    );
  }
}

export default App;

// separate layout to ui and main since not using props.children anymore
