import React from 'react';
import classes from './CreateAccount.module.css';

const createaccount = (props) => {
  return (
    <div className={classes.CreateAccount}>
      <h1>Create your account</h1>
      <label>Organization Name</label>
      <input placeholder="Organization" />
      <label>Username</label>
      <input placeholder="Username" />
      <label>Password</label>
      <input placeholder="Password" />
      <label>Re-enter Password</label>
      <input placeholder="Re-enter Password" />
      <button>Submit</button>
      <button>Back</button>
    </div>
  );
};

export default createaccount;