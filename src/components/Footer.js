import React from 'react'
import {
  Card,
  Button,
  Image,
  Header,
  Icon,
} from 'semantic-ui-react'
import logo1 from '../assets/PNG_1.png'
import logo2 from '../assets/PNG_2.png'

const footer = {
  position: 'fixed',
  bottom: '0',
  padding: '20px',
  width: '100%',
  borderTop: '1px solid #fbbd08',
  backgroundColor: '#fff',
}

const Footer = () => {
  return (
    <div style={footer}>
      <Header as="h4">
        &#127859; 한번에 다운받기
        <Icon name="angle down" />
      </Header>
      <Card.Group itemsPerRow={7}>
        <Card>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src={logo1}
            />
            <Card.Meta>서울</Card.Meta>
            <Card.Header>가야대</Card.Header>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src={logo2}
            />
            <Card.Meta>서울</Card.Meta>
            <Card.Header>가천대</Card.Header>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  )
}

export default Footer
