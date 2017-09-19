import React from 'react';
import logo from '../../assets/logo.svg';

class TitleComp extends React.Component{
  render = () => {
    return (
        <h3 className="ui header App-title">
          <p>대학교 로고 모음</p>
          {/* <div className="sub header">대학교 로고 모음</div> */}
          <img src={logo} className="App-logo" alt="logo" />
        </h3>
    );
  };
}

export default TitleComp; 