import React from 'react';

const getStyles = () => {
  return {
    padding: '5px',
    color: 'white',
    border: '0.5px solid white',
    borderRadius: '5px',
    marginLeft: '50px',
    backgroundColor: 'transparent',
  }
};

const LoginButton = () => {
  return (
    <button style={getStyles()}>
      Alpha Login
    </button>
  )
};

export default LoginButton;
