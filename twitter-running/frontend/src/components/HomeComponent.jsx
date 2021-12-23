import React, { Component } from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import axios from 'axios'
import { Carousel } from 'react-responsive-carousel'
import ReactHtmlParser from 'react-html-parser'; 
import config from '../services/config'
import SockJsClient from 'react-stomp'



class HomeComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      events: [],
      tweets: [],
      awards: [],
      newtweets: [],
      images : [],
       url : null
    }
  }

 importAll(r) {
  return r.keys().map(r);
}



  componentDidMount() {

    this.state.images = this.importAll(require.context('./Images', false, /\.(png|jpe?g|svg)$/));

    console.log(this.state.images)

    console.log(this.state.images)

    this.url = config.geturl() + 'websocket-chat/';

    
    console.log(config.getintv())
        console.log(config.getslide())

    axios.get(config.geturl() + `events/slide`).then((res) => {
      this.setState({ events: res.data.events })
    })

    axios.get(config.geturl() + 'awards').then((res) => {
      this.setState({ awards: res.data.awards })
    })

    axios.get(config.geturl() + `tweets?status=ACCEPTED`).then((res) => {
      this.setState({ newtweets: res.data.tweets })
       //console.log(res.data.tweets)
    })

     

  }

  change(str) {

    console.log(str)
    console.log("woo")
    

      axios.get(config.geturl() + `tweets?status=ACCEPTED`).then((res) => {
      this.setState({ newtweets: res.data.tweets })
    })     
    
  }

  render() {
    return (
      <Carousel
        autoPlay
        interval={config.getintv()}
        transitionTime={config.getslide()}
        infiniteLoop='true'
      >

     {this.state.images.map((image) => (
              <div>
          <img src={image.default}  alt='' />
        </div>
            ))}

        
        
        <div>
          <Row  className='card-container'>
            {this.state.newtweets.reverse().slice(0,40).map((tweet) => (
              <Col lg={4} md={6} key={tweet.id}>
                <Card id={tweet.id}>
                  <Card.Body>
                    <Card.Title className='mb-2 text-dark'>
                
                      <img
                        src={tweet.userImage}
                        style={{ height: '60px', width: '60px' }}
                        alt=''
                      />
                           <Col >
                        {tweet.user} 
                             </Col >
                    </Card.Title>

                    <Card.Subtitle className='text-dark'>
                      <span>{tweet.text}</span>
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        <div>
        &emsp;
          <h2 className='text-center'>  List of Events  </h2>
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
                    <td> { ReactHtmlParser (events.description) }  </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <Row className='card-container'>
            <Col>
              {this.state.awards.map((award) => (
                <Col key={award.id}>
                  <Card className='h-100'>
                    <Card.Body>
                      <Card.Title className='mb-2 text-dark'>
                       {award.title}
                      </Card.Title>

                      <Card.Subtitle className='text-dark'>
                       { ReactHtmlParser (award.description) }  
                      </Card.Subtitle>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Col>
          </Row>
        </div>

        <div>
          <Row className='card-container'>
            {this.state.events.slice(0, 3).map((event) => (
              <Col key={event.id}>
                <Card className='h-100'>
                  <Card.Body>
                    <Card.Title className='mb-2 text-dark'>
                      {event.title}
                    </Card.Title>
                    <Card.Text className='text-dark'>
                      Event Coordinator: <span>{event.coordinator}</span>
                    </Card.Text>
                    <Card.Subtitle className='text-dark'>
                      { ReactHtmlParser (event.description) } 
                    </Card.Subtitle>

                    <img src={event.images} style={{ height: '50% ' }} alt=''></img>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        <div>
          <SockJsClient
            url={this.url}
            topics={['/topic/user']}
            onConnect={console.log('Connection established!')}
            //onDisconnect={console.log("Disconnected!")}
            onMessage={(msg) => {
              console.log(msg.name)
              this.change(msg)
            }}
            ref={(client) => {
              this.clientRef = client
            }}
          />
        </div>
      </Carousel>
    )
  }
}

export default HomeComponent
