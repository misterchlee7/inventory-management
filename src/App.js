import React, { Component } from 'react';
import './App.css';

import Layout from './containers/Layout/Layout';
import NavBar from "./components/NavBar/NavBar";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Layout />
      </div>
    );
  }
}

export default App;
