import React, { Component } from 'react';

import SoundMap from './SoundMap';
import '../styles/ExplorerStyles.css';

/*
  >>- Explorer ->
  The explorer component of the rvrb app.
  This component contains a map and search bar, and maintains state thereof.
*/
class Explorer extends Component {
  state = {
    value: ''
  }

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    const { position } = this.props;
    
    return(
      <div className='Explorer'>
        <div className='Explorer-search-bar'>
          <input
            type='text'
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>
        <div className='Explorer-map'>
          <SoundMap position={position}/>
        </div>
      </div>
    );
  }

}

export default Explorer;
