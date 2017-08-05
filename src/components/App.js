// >>= React =>
import React, { Component } from 'react';

// >>= Resonance =>
import Banner from './Banner';
import Footer from './Footer';
import Explorer from './Explorer';
import Welcome from './Welcome';

import Texts from '../constants/Texts';
import Users from '../constants/Users';

import '../styles/AppStyles.css';
import '../styles/RvrbEffects.css';

class App extends Component {
  state = {
    authenticated: false,
    authenticating: false,
    page: '',
    position: {},
  }

  constructor() {
    super();

    // TODO: is there a better way ?
    // bind callbacks
    this.getPosition = this.getPosition.bind(this);
    this.handleAuthSubmit = this.handleAuthSubmit.bind(this);
    this.handlePosSuccess = this.handlePosSuccess.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  /**
   * Authenticating =>
   *
   * Functions to faciliate authenticating a user.
   *
   */

  /**
   * Handle authentication process initiation.
   * @param {Object} user : user profile data
   */
  handleAuthSubmit(user) {
    console.log('res // auth has been submitted.' + user);

    // authenticate
    const isValid = true; //Users.includes(user);
    const isAuthenticating = !isValid;

    // success
    const userPosition = isValid && this.getPosition();
    const page = isValid && 'EXPLORER';

    this.setState({
      authenticated: isValid,
      authenticating: isAuthenticating,
      page: page,
      position: userPosition,
    });

  }

  /**
   * Get the client's position.
   * @callback handlePosSuccess : handle success
   * @callback handleError : handle error
   */
  getPosition() {
    const posOptions = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    if(navigator.geolocation){

      navigator.geolocation.getCurrentPosition(this.handlePosSuccess, this.handleError, posOptions);

    }else{

      console.warn('res // no navigator.geoLocation');

    }

  }

  /**
   * Handle client's position data being returned.
   * @param {Object} position : position data
   */
  handlePosSuccess(position) {
    console.log('res // setting location to: ' + position.coords.lat + ', ' + position.coords.lon);

    this.setState({
      coords: position.coords,
    });

  }

  /**
   * Handle client's position being in error.
   * @param {Object} err : error data
   */
  handleError(err){
    console.warn('res // ERROR : ' + err.code);
  }

  /**
   * Rendering =>
   * Functions to render html.
   *
   */

  /**
   * Get the application banner content.
   */
  genBannerContent() {

    return <Banner title={Texts.title} />;

  }

  /**
   * Get the application primary content.
   */
  genMainContent(page) {
    switch (page) {

      case 'EXPLORER':
        return (
          <Explorer
            coords={this.state.coords}
            getPosition={this.getPosition}
          />
        );

      default:
        return (
          <Welcome
            title={Texts.title}
            label={Texts.titleButtonLabel}
            onClick={this.handleAuthSubmit}
          />
        );
    }
  }

  /**
   * Get the application footer content.
   */
  genFooterContent() {
    return (

      <Footer />

    );
  }

  /**
   * Render the application.
   *
   */
  render() {

    // params
    const {authenticated, page} = this.state;

    // html
    const banner = authenticated && this.genBannerContent();
    const footer = authenticated && this.genFooterContent();
    const primary = this.genMainContent(page);

    return (
      <div className="App">
        {banner}
        {primary}
        {footer}
      </div>
    );
  }
}

export default App;
