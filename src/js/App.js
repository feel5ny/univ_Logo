import React, { Component } from 'react'
import MainPage from './pages/MainPage'
import './App.css'
import { Provider } from 'react-redux'
// import store from './store'
import * as firebase from 'firebase'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <MainPage />
      </div>
    )
  }
}

export default App
