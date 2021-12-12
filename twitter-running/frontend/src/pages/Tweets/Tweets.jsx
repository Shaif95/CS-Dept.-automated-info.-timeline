import React, { Component } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listTweets } from '../../actions/userActions'
import Meta from '../../components/Meta'
import './Tweets.scss'
import axios from 'axios'
import AddIcon from '@mui/icons-material/Add'
import config from '../../services/config'
import { Link } from 'react-router-dom'
import SockJsClient from 'react-stomp'
import Pagination from '../../components/Pagination'

class Tweets extends Component {

  constructor(props) {
    super(props)

    this.change = this.change.bind(this)

    this.state = {
      tweets: [],
    }
  }

  change(str) {

    console.log(str)
    console.log("woo")
    

      axios.get(config.geturl() + `tweets?status=ACCEPTED`).then((res) => {
      this.setState({ tweets: res.data.tweets })
    })     
    
  }

  componentDidMount() {
    axios.get(config.geturl() + `tweets?status=ACCEPTED`).then((res) => {
      this.setState({ tweets: res.data.tweets })
    })
  }



 


render() {
    return (
    <>
      <Meta title='Tweets' />
      <Container fluid className='home-container'>
        
          
        
        
          <Container fluid>
            <Row className='card-container'>
              {this.state.tweets.map((tweet) => (
                <Col id='col' lg={4} md={6} key={tweet.id}>
                  <Card id={tweet.id}>
                    <Card.Body>
                      <Card.Title className='mb-2 text-dark'>
                        <img
                          src={tweet.userImage}
                          style={{ height: '50% ' }}
                          alt=''
                        ></img>
                      </Card.Title>
                      <Card.Subtitle className='text-dark'>
                        {tweet.user}
                      </Card.Subtitle>
                      <Card.Text className='text-dark mt-1'>
                        Tweet: <span>{tweet.text}</span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            
          </Container>
        
      </Container>

      <div>
        <SockJsClient
          url='https://baylor-board.herokuapp.com/websocket-chat/'
          topics={['/topic/user']}
          onConnect={console.log('Connection established!')}
          //onDisconnect={console.log("Disconnected!")}
          onMessage={(msg) => {
            console.log(msg.name)
            this.change(msg)
          }}
        />
      </div>
    </>
  )
}
}

export default Tweets
