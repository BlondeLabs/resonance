import React, { Component } from 'react';
import PropTypes from 'prop-types';

import _ from 'lodash';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import withScriptjs from 'react-google-maps/lib/async/withScriptjs';

import fancyMapStyles from "../styles/fancyMapStyles.json";
import '../styles/SoundMapStyles.css';

/*
 * This is the modify version of:
 * https://developers.google.com/maps/documentation/javascript/examples/event-arguments
 *
 * Loaded using async loader.
 */
const AsyncGettingStartedExampleGoogleMap = _.flowRight(
    withScriptjs,
    withGoogleMap,
  )(props => (
    <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={15}
      defaultCenter={props.center}
      defaultOptions={{ styles: fancyMapStyles }}
      onClick={props.onMapClick}
    >
    {props.markers.map(marker => (
      <Marker
        {...marker}
        onRightClick={() => props.onMarkerRightClick(marker)}
      />
    ))}
  </GoogleMap>
));

export default class AsyncGettingStartedExample extends Component {

  static propTypes = {
  };

  state = {
    markers: [],
  }

  handleMapLoad = this.handleMapLoad.bind(this);
  handleMapClick = this.handleMapClick.bind(this);
  handleMarkerRightClick = this.handleMarkerRightClick.bind(this);

  handleMapLoad(map) {
    this._mapComponent = map;
    if (map) {
      console.log(map.getZoom());
    }
  }

  /*
   * This is called when you click on the map.
   * Go and try click now.
   */
  handleMapClick(event) {
    const nextMarkers = [
      ...this.state.markers,
      {
        position: event.latLng,
        defaultAnimation: 2,
        key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
      },
    ];
    this.setState({
      markers: nextMarkers,
    });

    if (nextMarkers.length === 3) {

    }
  }

  handleMarkerRightClick(targetMarker) {
    /*
     * All you modify is data, and the view is driven by data.
     * This is so called data-driven-development. (And yes, it's now in
     * web front end and even with google maps API.)
     */
    const nextMarkers = this.state.markers.filter(marker => marker !== targetMarker);
    this.setState({
      markers: nextMarkers,
    });
  }

  /**
  * Update state in response to changes in props:
  *
  */
  componentWillReceiveProps(nextProps) {
    const nextPosition = nextProps.position;

    if(nextPosition){
      this.setState({
        position: nextPosition,
        markers: [{
          position: nextPosition,
          key: 'YOU',
          defaultAnimation: 2,
        }],
      })
    }
  }

  render() {
    const position = this.state.position;
    return (
      position ? (
        <AsyncGettingStartedExampleGoogleMap
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBQsP1mz4VeszYXRQzCzTqD5q2JKWmTy0Q"
          loadingElement={
            <div style={{ height: `100%` }}>
              loading map...
            </div>
          }
          containerElement={
            <div style={{ height: `100%` }} />
          }
          mapElement={
            <div style={{ height: `100%` }} />
          }
          onMapLoad={this.handleMapLoad}
          onMapClick={this.handleMapClick}
          markers={this.state.markers}
          onMarkerRightClick={this.handleMarkerRightClick}
          center={position}
        />
      ) : (
        <div className='loading'>
          homing position...
        </div>
      )
    );
  }
}
