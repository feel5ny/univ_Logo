import React, { Component } from 'react';
import Header from '../components/Header';
import UnivList from '../components/UnivList';

class MainPage extends Component {
  render() {
    return (
      <div className ="ui grid">
        <div className="two wide column"></div>
        <div className="twelve wide column">
          <Header />
          <UnivList />
        </div>
        <div className="two wide column"></div>
      </div>
    )
  }
}

export default MainPage;
