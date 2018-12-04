import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class Layout extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <div>
            <p>Hamburger Menu</p>
            <p>Logo</p>
            <p>Nav</p>
          </div>
          <Switch>
            <Route exact path ='/' component={Login} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
};

export default Layout;