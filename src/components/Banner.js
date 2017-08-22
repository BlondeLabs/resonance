import React from 'react';

import AppStyles from '../styles/AppStyles';

const Banner = ({ config }) => {
  // styles
  const { BannerItemStyles, BannerContainerStyles } = AppStyles;

  // items
  const items = config.map(function(child){
    return (
      <div style={BannerItemStyles}>
        {child.label}
      </div>
    );
  });

  // composition
  return (
    <div style={BannerContainerStyles}>
      {items}
    </div>
  );
};

export default Banner;
