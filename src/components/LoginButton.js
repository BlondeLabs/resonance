import React from 'react';

const getStyles = () => {
  return {
    padding: '15px',
    color: 'white',
    border: '0.5px solid white',
    borderRadius: '5px',
    backgroundColor: 'transparent',
    fontFamily: 'Comfortaa',
  }
};

const LoginButton = ({onLoginButtonClick}) => {
  return (
    <button
      className="logo-pulse"
      style={getStyles()}
      onClick={onLoginButtonClick}>

      <span className="button-label"> Alpha Login </span>

    </button>
  )
};

export default LoginButton;
