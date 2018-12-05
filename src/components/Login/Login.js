import React from 'react';
import classes from './Login.module.css';

const login = (props) => {
  return (
    <div className={classes.Login}>
      <h1>Welcome</h1>
      <input placeholder="Username" />
      <input placeholder="Password" />
      <button>Login</button>
      <br></br>
      <a href="/create-account">Create Account</a>
    </div>
  );
}

export default login;