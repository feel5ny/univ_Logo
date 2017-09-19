import React, { Component } from 'react';
import MainPage from './pages/MainPage';
import './App.css';
import * as firebase from 'firebase';

// firebase.initializeApp(config)

class App extends Component {
  render() {
    return (
      <MainPage />
    );
  }
}

export default App;
