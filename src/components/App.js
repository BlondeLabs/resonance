// react
import React, { Component } from 'react';

// resonance
import Banner from './Banner';
import Footer from './Footer';
import Texts from '../constants/Texts';
import '../styles/App.css';

class App extends Component {
  state = {
    authenticated: false,
  }

  handleAuth = (e) => {
    this.setState({
      authenticated: !this.state.authenticated,
    });
  }

  render() {
    const isAuthenticated = this.state.authenticated;

    return (

      <div className="App">

        <Banner title={Texts.title}/>

        {isAuthenticated ? (
          <p>welcome</p>
        ) : (
          <p>follow your sound. coming soon.</p>
        )}

        <Footer onAuthRequest={this.handleAuth}/>

      </div>
    );
  }
}

export default App;
