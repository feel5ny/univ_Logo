import React, { Component } from 'react'
import { Modal, Button, Image, Header, Popup } from 'semantic-ui-react'
import { HOSTNAME } from '../config'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Link } from 'react-router-dom'
import { DragSource } from 'react-dnd'
import { database } from '../../firebase'
import firebase from 'firebase'

// const univs = [
//   {
//     location: '서울',
//     university: '00대학교',
//     image: '',
//     svgFile: '',
//     pngFile: '',
//   },]

class UnivItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      copied: false,
    }
  }
  // modal
  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  // copytoClipboard
  onCopy = () => {
    this.setState({ copied: true })
  }

  render() {
    const { open, dimmer } = this.state
    // if(this.state.isLoading) return <h1>로딩중입니다.</h1>
    return (
      <div className="card">
        <div className="content">
          <img className="left floated mini ui image" src={this.props.img} />
          <i className="right floated yellow ui plus icon" />

          <Popup
            position="top center"
            trigger={
              <CopyToClipboard
                onCopy={this.onCopy}
                text={this.props.brandColor}
              >
                <i
                  className="right floated ui eyedropper icon"
                  style={{
                    color: `${this.props.brandColor}`,
                  }}
                />
              </CopyToClipboard>
            }
            style={{
              backgroundColor: `${this.props.brandColor}`,
              color: 'white',
            }}
          >
            {this.props.brandColor}
          </Popup>
          <div className="meta left">{this.props.location}</div>
          <div className="header">{this.props.university}</div>
        </div>
        <div className="extra content">
          <Button onClick={this.show('blurring')} basic color="yellow" fluid>
            &#9994; 로고 규정 확인하기
          </Button>

          <Modal dimmer={dimmer} open={open} onClose={this.close}>
            <Modal.Header>{this.props.university}</Modal.Header>
            <Modal.Content image>
              <Image wrapped size="medium" src={this.props.img} />
              <Modal.Description>
                <Header>Default Profile Image</Header>
                <p>
                  We've found the following gravatar image associated with your
                  e-mail address.
                </p>
                <p>Is it okay to use this photo?</p>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button color="black" onClick={this.close}>
                Nope
              </Button>
              <Button
                positive
                icon="checkmark"
                labelPosition="right"
                content="Yep, that's me"
                onClick={this.close}
              />
            </Modal.Actions>
          </Modal>
          <Button.Group fluid>
            <Button basic color="grey">
              SVG
            </Button>
            <Button basic color="grey">
              PNG
            </Button>
          </Button.Group>
          {/* <div className="ui two buttons">
            <a
              href={this.props.img}
              download
              className="ui basic grey button"
              style={{ backgroundColor: 'red' }}
            >
              SVG
            </a>
            <div className="ui basic grey button">
              PNG
            </div>
          </div> */}
        </div>
      </div>
    )
  }
}

class UnivList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      errorState: false,
      univList: [],
    }
  }

  componentDidMount = () => {
    // var userId = firebase.auth().currentUser.uid
    return firebase
      .database()
      .ref('/logoLists')
      .once('value')
      .then(snapshot => {
        this.setState({
          univList: snapshot.val(),
        })
        console.log(snapshot.val())
      })
  }
  // fetch(`${HOSTNAME}/logoLists`)
  //   .then(res => res.json())
  //   .then(data => {
  //     this.setState({
  //       univsList: data,
  //     })
  //   })
  //   .catch(error => {
  //     this.setState({
  //       isLoading: false,
  //       errorState: true,
  //     })
  //   })
  render = () => {
    return (
      <div className="ui three link stackable cards">
        {this.state.univList.map(univ => {
          return (
            <UnivItem
              location={univ.location}
              university={univ.university}
              img={univ.downloadUrlPng}
              brandColor={univ.brandColor}
            />
          )
        })}
      </div>
    )
  }
}
export default UnivList
