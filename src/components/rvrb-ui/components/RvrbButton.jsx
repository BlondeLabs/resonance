import React from 'react';

import '../styles/RvrbUiStyles.css';

const RvrbButton = ({label, onClick}) => {
  return (
    <button
      className='rvrb-button'
      onClick={onClick}>

      <span className='rvrb-button-label'>{label}</span>

    </button>
  )
};

export default RvrbButton;
