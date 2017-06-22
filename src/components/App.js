// REACT
import React, { Component } from 'react';
// MATERIAL
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// CUSTOM
import Login from './Login';
import '../styles/App.css';

const resonanceStyles = {
  bar : {
    backgroundColor: 'rgb(0, 117, 255)',
    color: 'white',
    fontFamily: 'Comfortaa',
    fontWeight: 300,
    fontSize: 50
  },
};

const resonanceConfig = {
  title : 'clix',
};

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar
            style={resonanceStyles.bar}
            title={resonanceConfig.title}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
