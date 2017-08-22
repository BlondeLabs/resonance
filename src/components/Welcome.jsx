// >>= React =>
import React from 'react';

// >>= Resonance =>
import RvrbButton from './rvrb-ui/components/RvrbButton';
import arrow from '../media/arrow.svg';
import AppStyles from '../styles/AppStyles';

const customButtonStyles = {
  fontSize : '2vmin',
};

const { WelcomeContainerStyles, WelcomeTitleStyles, WelcomeButtonStyles } = AppStyles;

const Welcome = ({title, label, onClick}) => {
  return (
    <div style={WelcomeContainerStyles}>
      <div
        onClick={onClick}
        style={WelcomeTitleStyles}>{title}</div>
    </div>
  );
};

export default Welcome;
