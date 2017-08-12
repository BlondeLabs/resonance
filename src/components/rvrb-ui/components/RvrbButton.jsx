import React from 'react';

import '../styles/RvrbUiStyles.css';

const RvrbButton = ({label, onClick, customStyles}) => {
  return (
    <button
      className='rvrb-button'
      onClick={onClick}
      style={customStyles}>

      <span className='rvrb-button-label'>{label}</span>

    </button>
  )
};

export default RvrbButton;
