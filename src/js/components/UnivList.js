import React, { Component } from 'react'
import { Modal, Button, Image, Header, Popup } from 'semantic-ui-react'
import { HOSTNAME } from '../config'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Link } from 'react-router-dom'
import { DragSource } from 'react-dnd'
import { database } from '../../firebase'
import firebase from 'firebase'
import { storage } from '../../firebase'
import _ from 'lodash'

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
      downloadUrl: null,
    }
  }

  // modal

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  // copytoClipboard
  onCopy = () => {
    this.setState({ copied: true })
  }

  componentWillMount() {
    const { imgRef } = this.props

    imgRef.getDownloadURL().then(url => {
      return this.setState({ downloadUrl: url })
    })
  }

  render() {
    const { open, dimmer } = this.state

    return (
      <div className="card">
        <div className="content">
          <img
            className="left floated mini ui image"
            src={this.state.downloadUrl}
          />
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

          {this.state.downloadUrl === null ? (
            ''
          ) : (
            <Button.Group fluid>
              <a
                // href={this.state.downloadURL}
                download="proposed_file_name"
                style={{
                  width: '50%',
                  marginRight: '10px',
                }}
              >
                <Button
                  basic
                  color="grey"
                  style={{
                    width: '100%',
                  }}
                >
                  SVG
                </Button>
              </a>
              <a
                href={this.state.downloadUrl}
                download="proposed_file_name"
                style={{
                  width: '50%',
                }}
              >
                <Button
                  basic
                  color="grey"
                  style={{
                    width: '100%',
                  }}
                >
                  PNG
                </Button>
              </a>
            </Button.Group>
          )}
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
    firebase
      .database()
      .ref('/logoLists')
      .once('value')
      .then(snapshot => {
        this.setState({
          univList: snapshot.val(),
        })
      })
  }
  render = () => {
    return (
      <div className="ui three link stackable cards">
        {this.state.univList.map((univ, i) => {
          const storageRef = storage.ref()
          const imgRef = storageRef.child('color/PNG_' + (i + 1) + '.png')
          return (
            <UnivItem
              imgRef={imgRef}
              location={univ.location}
              university={univ.university}
              // img={univ.downloadUrlPng}
              brandColor={univ.brandColor}
            />
          )
        })}
      </div>
    )
  }
}
export default UnivList
