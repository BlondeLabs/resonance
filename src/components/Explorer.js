import React, { Component } from 'react';

import '../styles/ExplorerStyles.css'

/*
  >>- Explorer ->
  The explorer component of the rvrb app.
  This component contains a map and search bar, and maintains state thereof.
*/
class Explorer extends Component {
  constructor(props) {
    super(props);

  }

  render() {

    const { coords, customStyles } = this.props;

    const lat = coords && coords.latitude;
    const lon = coords && coords.longitude;

    return(
      <div className='Explorer' style={customStyles}>
        <p> Latitude: { lat } </p>
        <p> Longitude: { lon } </p>
      </div>
    );
  }

}

export default Explorer;
