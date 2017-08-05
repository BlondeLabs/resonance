import React from 'react';
import Colors from '../constants/Colors';

const Banner = ({title}) => {
  return (
    <div className="Banner">
      <div className="title">{title}</div>
    </div>
  );
};

export default Banner;
