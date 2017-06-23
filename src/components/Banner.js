import React from 'react';

const bannerStyles = {
  backgroundColor: 'rgb(7, 38, 29)',
  color: 'rgb(141, 241, 196)',
  height: '25vh',
  padding: '25px',
  paddingTop: '100px',
  fontSize: '8vmin',
  boxSizing: 'border-box',
};


const getStyles = () => {
  return bannerStyles;
};
const Banner = () => {
  return (
    <div
      className="Banner"
      style={getStyles()}>

      <div className="hvr-pulse">e l i x i r</div>

    </div>
  );
};

export default Banner;
