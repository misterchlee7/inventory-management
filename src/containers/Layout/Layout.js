import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from '../../components/Login/Login';
import Error404 from '../../components/Error404/Error404';

class Layout extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path ='/' component={Login} />
          <Route component={Error404} />
        </Switch>
      </Router>
    );
  }
};

export default Layout;