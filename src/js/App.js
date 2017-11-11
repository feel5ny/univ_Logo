import React, { Component } from 'react'
import MainPage from './pages/MainPage'
import './App.css'
<<<<<<< HEAD:src/App.js
import { Provider } from 'react-redux'
import store from './store'
=======
import * as firebase from 'firebase'
>>>>>>> a9a9462c08c862f00d635ba630f439c87d42ff68:src/js/App.js
import Footer from './components/Footer'

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
