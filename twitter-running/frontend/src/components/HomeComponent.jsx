import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Container, Row, Col, Card } from 'react-bootstrap'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import axios from 'axios'
import { Carousel } from 'react-responsive-carousel'
import Image from './la.jpg'
import Image1 from './chicago.jpg'

class HomeComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      events: [],
      tweets: [],
      newtweets : [],
    }
  }

  componentDidMount() {
    axios.get(`https://baylor-board.herokuapp.com/events/slide`).then((res) => {
      this.setState({ events: res.data.events })
    })

    axios.get(`https://baylor-board.herokuapp.com/tweets`).then((res) => {
      this.setState({ tweets: res.data.tweets })

      for (let i = 0; i < this.state.tweets.length; i++) {
 
  if(this.state.tweets[i].status == "ACCEPTED")
  {
    console.log("happend")
    this.state.newtweets.push(this.state.tweets[i])
  }

}

  
    })
  }

  render() {
    return (
      <Carousel
        autoPlay
        interval='5000'
        transitionTime='2000'
        infiniteLoop='true'
      >
        <div>
          <img src={Image} />
        </div>
        <div>
          <img src={Image1} />
        </div>

        <div>
          <Row className='card-container'>
            {this.state.newtweets.map((tweets) => (
              <Col lg={4} md={6} key={tweets.id}>
                <Card>
                  <Card.Body>
                    <Card.Title className='mb-2 text-dark'>
                      UserName : {tweets.user}
                    </Card.Title>
                    <Card.Text className='text-dark'>
                      Tweet: <span>{tweets.text}</span>
                    </Card.Text>
                    <Card.Subtitle className='text-dark'>
                      Status: {tweets.status}
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        <div>
          <h2 className='text-center'> List of Events </h2>
          <div className='row'>
            <table className='table table-striped table-bordered'>
              <thead>
                <tr>
                  <th> Event Title </th>
                  <th> Event Coordinator </th>
                  <th> Event Description </th>
                </tr>
              </thead>
              <tbody>
                {this.state.events.reverse().map((events) => (
                  <tr key={events.id}>
                    <td> {events.title} </td>
                    <td> {events.coordinator}</td>
                    <td> {events.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <Row className='card-container'>
            {this.state.events.slice(0, 3).map((event) => (
              <Col key={event.id}>
                <Card className='h-100'>
                  <Card.Body>
                    <Card.Title className='mb-2 text-dark'>
                      Event Title: {event.title}
                    </Card.Title>
                    <Card.Text className='text-dark'>
                      Event Coordinator: <span>{event.coordinator}</span>
                    </Card.Text>
                    <Card.Subtitle className='text-dark'>
                      Event Description: {event.description}
                    </Card.Subtitle>

                    <img src={event.images} style={{ height: '50% ' }}></img>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Carousel>
    )
  }
}

export default HomeComponent
