import React from 'react';
import classes from './NavBar.module.css';

import Logo from '../Logo/Logo';

const navbar = (props) => {
  return (
    <div className={classes.Navbar}>
      <p>Hamburger Menu</p>
      <Logo height="30px" />
      <p>Nav</p>
    </div>
  );
}

export default navbar;