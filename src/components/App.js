// react
import React, { Component } from 'react';
// resonance
import Banner from './Banner';
import Footer from './Footer';
import Constants from '../constants/Constants';
import '../styles/App.css';

const resonConfig = {
  title : 'clix',
};

const resonStyles = {
  fontFamily : 'Comfortaa',
  fontWeight : 300,
};

const getStyles = () => {
  return resonStyles;
};

const getPStyles = () => {
  return {
    color : 'white',
    paddingTop : '100px',
  }
};

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={getStyles()}>
        <Banner title={Constants.title}/>
        <p style={getPStyles()}>

          follow your sound...

        </p>
        <Footer />
      </div>
    );
  }
}

export default App;
