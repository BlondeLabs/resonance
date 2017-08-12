import React from 'react';

import RvrbButton from './rvrb-ui/components/RvrbButton';
import '../styles/WelcomeStyles.css';

const customButtonStyles = {
  fontSize : '2vmin',
};

const Welcome = ({title, label, onClick}) => {
  return (
    <div className='welcome-container'>
      <div className='welcome-title'>
        {title}
      </div>
      <div className='welcome-button'>
        <RvrbButton
          label={label}
          onClick={onClick}
          customStyles={customButtonStyles}
        />
      </div>
    </div>
  );
};

export default Welcome;
