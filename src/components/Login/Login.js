import React from 'react';

const login = (props) => {
  return (
    <div>
      <h1>Welcome</h1>
      <input placeholder="Username" />
      <input placeholder="Password" />
      <button>Login</button>
      <br></br>
      <a href="#">Create Account</a>
    </div>
  );
}

export default login;