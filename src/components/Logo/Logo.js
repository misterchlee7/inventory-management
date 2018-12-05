import React from 'react';
import Logo from '../../assets/images/logo.png';


const logo = (props) => {
  return (
    <div>
      <a href={props.redirect}>
        <img 
          src={Logo}
          alt="logo.png" 
          style={{ height: props.height }} />
      </a>
    </div>
  );
};

export default logo;