import React, { Component } from 'react';
import LoginButton from './LoginButton';
import gitlogo from '../media/GitHub-Mark-Light-32px.png'

const footStyles = {
  position: 'fixed',
  background: 'rgb(11, 10, 51)',
  height: '24px',
  right: 0,
  bottom: 0,
  left: 0,
  padding: '1rem',
};

const getFootStyles = () => {
  return footStyles;
};

const getLogoStyles = () => {
};

class Footer extends Component {
  render() {
    return (
      <footer className="Foot" style={ getFootStyles() }>

          <div className="flex-item">
            <a className="logo-pulse" href="https://github.com/Project-Clix">
              <img src={gitlogo} alt={""}/>
            </a>
          </div>

          <div className="flex-item">
            <LoginButton
              className="logo-pulse"
              onAuthRequest={this.props.onAuthRequest}
            />
          </div>

      </footer>
    );
  }
}
export default Footer;
