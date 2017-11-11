import React, { Component } from 'react'
import MainPage from './pages/MainPage'
import './App.css'
import { Provider } from 'react-redux'
import store from './store'
import Footer from './components/Footer'

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
