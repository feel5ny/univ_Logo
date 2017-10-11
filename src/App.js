import React, { Component } from 'react'
import MainPage from './pages/MainPage'
import './App.css'
import { Provider } from 'react-redux'
import store from './store'
import * as firebase from 'firebase'
import Footer from './components/Footer'

// firebase.initializeApp(config)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <MainPage />
          <Footer />
        </div>
      </Provider>
    )
  }
}

export default App
