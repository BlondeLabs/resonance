import React from 'react';

import '../styles/RvrbUiStyles.css';

const defButtonStyles = {
  color: 'white',
  background: 'transparent',
  fontFamily: 'futura-pt',
  border: 'none',
  textAlign: 'center',
  textDecoration: 'none',
  padding: '10px',
};

const defLabelStyles = {
  fontSize: '2em',
};

const defIconStyles = {
  maxWidth: '100%',
  maxHeight: '100%',
  color: 'white',
  backgroundColor: 'transparent',
};

const RvrbButton = ({label, icon, onClick, customStyles}) => {

  const buttonStyles = Object.assign(defButtonStyles, customStyles);

  return (
    <button
      className='rvrb-button'
      onClick={onClick}
      style={buttonStyles}>

      { label && <span style={defLabelStyles}>{label}</span> }

      { icon && <img src={icon} alt={''} style={defIconStyles}></img>}

    </button>
  )
};

export default RvrbButton;
