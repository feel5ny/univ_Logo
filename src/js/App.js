import React, { Component } from 'react'
import MainPage from './pages/MainPage'
import './App.css'
import * as firebase from 'firebase'
import Footer from './components/Footer'

// firebase.initializeApp(config)

class App extends Component {
  render() {
    return (
      <div>
        <MainPage />
        <Footer />
      </div>
    )
  }
}

export default App
