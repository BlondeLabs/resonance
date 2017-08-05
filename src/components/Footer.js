import React from 'react';

import LoginButton from './LoginButton';
import LoginForm from './LoginForm';
import gitlogo from '../media/GitHub-Mark-Light-32px.png'

/* >>- Footer ->
This component contains elements in a section fixed to the bottom of the screen.
*/
const Footer = ({isAuthenticating, isAuthenticated, onAuthSubmit, onAuthStart}) => {

  return (
    <footer className="Foot">

        <div className="flex-item">
          <a className="logo-pulse" href="https://github.com/Project-Clix">
            <img src={gitlogo} alt={""}/>
          </a>
        </div>

    </footer>
  );
}
export default Footer;
