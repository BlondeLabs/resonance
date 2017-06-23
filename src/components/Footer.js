import React, { Component } from 'react';
import LoginButton from './LoginButton';
import gitlogo from '../media/GitHub-Mark-Light-32px.png'

const footStyles = {
  position: 'fixed',
  background: 'transparent',
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
        <div className="Foot-logo">
          <a className="hvr-pulse" href="https://github.com/Project-Clix">
            <img src={gitlogo} alt={""}/>
          </a>
          <LoginButton className="hvr-pulse"/>
        </div>
      </footer>
    );
  }
}
export default Footer;
