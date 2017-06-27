import React from 'react';

const getStyles = () => {
  return {
    padding: '5px',
    color: 'white',
    border: '0.5px solid white',
    borderRadius: '5px',
    backgroundColor: 'transparent',
    fontFamily: 'Comfortaa',
  }
};

const LoginButton = (props) => {
  return (
    <button
      className="logo-pulse"
      style={getStyles()}
      onClick={props.onAuthRequest}>

      <span className="button-label"> Alpha Login </span>

    </button>
  )
};

export default LoginButton;
