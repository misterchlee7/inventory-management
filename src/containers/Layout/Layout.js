import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from '../../components/Login/Login';
import CreateAccount from '../../components/CreateAccount/CreateAccount';
import Error404 from '../../components/Error404/Error404';

class Layout extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path ='/' component={Login} />
          <Route exact path ='/create-account' component={CreateAccount} />
          <Route component={Error404} />
        </Switch>
      </Router>
    );
  }
};

export default Layout;