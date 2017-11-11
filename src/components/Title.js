import React from 'react'
import logo from '../assets/logo.svg'
import { connect } from 'react-redux'

class TitleComp extends React.Component {
  render = () => {
    return (
      <h3 className="ui header App-title">
        <p>대학교 로고 모음</p>
        {/* <div className="sub header">대학교 로고 모음</div> */}
        <img
          src={logo}
          className="App-logo"
          alt="logo"
        />
      </h3>
    )
  }
}

// export default TitleComp
const mapStateToProps = state => {
  return {
    rootColor: state.colors.rootColor,
  }
}

export default connect(mapStateToProps, null)(
  TitleComp,
)
