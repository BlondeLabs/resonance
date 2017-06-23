// js
import React, { Component } from 'react';
import Banner from './Banner';
// css
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

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={getStyles()}>
        <Banner />
      </div>
    );
  }
}

export default App;
