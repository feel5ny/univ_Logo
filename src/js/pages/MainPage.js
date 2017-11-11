import React, { Component } from 'react'
import Header from '../components/Header'
import UnivList from '../components/UnivList'
import Footer from '../components/Footer'
import { storage } from '../../firebase'

const storageRef = storage.ref()

class MainPage extends Component {
  state = {
    downloadURL: null,
  }
  fileDownload = () => {
    const imgRef = storageRef.child('color/profile.png')
    imgRef.getDownloadURL().then(url => {
      this.setState({
        downloadURL: url,
      })
    })
  }

  render() {
    return (
      <div className="ui grid">
        <div className="two wide column" />
        <div className="twelve wide column">
          <Header />
          <button onClick={() => this.fileDownload()}>다운로드 테스트</button>
          <a href={this.state.downloadURL} download="proposed_file_name">
            Download
          </a>

          <UnivList />
        </div>
        <div className="two wide column" />
      </div>
    )
  }
}

export default MainPage
