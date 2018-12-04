import React from 'react';
import classes from './NavBar.module.css';

const navbar = (props) => {
  return (
    <div className={classes.Navbar}>
      <p>Hamburger Menu</p>
      <p>Logo</p>
      <p>Nav</p>
    </div>
  );
}

export default navbar;