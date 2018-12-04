import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from '../../components/Login/Login';

class Layout extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path ='/' component={Login} />
        </Switch>
      </Router>
    );
  }
};

export default Layout;