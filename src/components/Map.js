import React, { Component } from 'react';

const Map = ({position, beacons}) => {

  // beacon data -> beacon elements
  beacons.forEach((beacon_data, idx, arr) => {
    <Beacon ...beacon_data />
  });

  // render map
  return (
    <div className="Map">
      <p>{ position }</p>
      { beacons }
    </div>
  );
};
