// >>= React =>
import React, { Component } from 'react';
import Typekit from 'react-typekit';

// >>= Resonance =>
import Banner from './Banner';
import Footer from './Footer';
import Explorer from './Explorer';
import Welcome from './Welcome';

import Config from '../constants/Config';
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
    const userPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };

    this.setState({
      position: userPosition,
    });

  }

  /**
   * Handle client's position being in error.
   * @param {Object} err : error data
   */
  handleError(err){
    console.warn('res // ERROR : ' + err.msg);
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
    const { bannerConfig } = Config;

    return(
      <Banner config={bannerConfig} />
    );

  }

  /**
   * Get the application primary content.
   */
  genPrimaryContent(page) {
    switch (page) {

      case 'EXPLORER':
        return (
          <Explorer
            position={this.state.position}
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
    return <Footer />;
  }

  /**
   * Render the application.
   *
   */
  render() {

    // params
    const { authenticated, page } = this.state;

    // html
    const banner = authenticated && this.genBannerContent();
    const primary = this.genPrimaryContent(page);

    return (
      <div className="App">
        {banner}
        {primary}
        <Typekit kitId="ror1hyt" />
      </div>
    );
  }
}

export default App;
