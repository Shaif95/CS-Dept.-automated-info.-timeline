import React from 'react'
import { Container, Row, Col, Card, Carousel, Image } from 'react-bootstrap'
import './Home.scss'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { listTweets } from '../../actions/userActions'
import Meta from '../../components/Meta'
import banner1 from '../../assets/img/banner1.jpg'
import banner2 from '../../assets/img/banner2.jpg'
import fac from '../../assets/img/la.jpg'
import back from '../../assets/img/baylor_background.jpg'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listTweets())
  }, [dispatch])

  const baseURL = 'https://baylor-board.herokuapp.com/events'

  const [events, setPost] = React.useState(null)

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data.events)
    })
  }, [])

  if (!events) return null

  return (
    <>
      <Meta />
      <Container fluid className='home-container'>
        <div className='row carousel-container'>
          <div className='col-12'>
            <Carousel>
              <Carousel.Item>
                <Image
                  className='d-block w-100 carousel-style'
                  src={banner1}
                  alt='First slide'
                  fluid
                />
                <Carousel.Caption>
                  <h3>Tinker Tuesday</h3>
                  <p className='carousel-text'>
                    DATE <i className='ml-3'>November 9, 2021</i> <br />
                    TIME <i className='ml-3'>10:00 am - 12:00 pm</i> <br />
                    LOCATION <i className='ml-3'>Mayborn Museum Complex</i>
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <Image
                  className='d-block w-100 carousel-style'
                  src={banner2}
                  alt='Second slide'
                  fluid
                />

                <Carousel.Caption>
                  <h3>Village Wednesday</h3>
                  <p className='carousel-text'>
                    DATE <i className='ml-3'>November 10, 2021</i> <br />
                    TIME <i className='ml-3'>10:00 am - 12:00 pm</i> <br />
                    LOCATION <i className='ml-3'>Mayborn Museum Complex</i>
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <Image
                  className='d-block w-100 carousel-style'
                  src={fac}
                  alt='Second slide'
                  fluid
                />
              </Carousel.Item>

              <Carousel.Item>
                <Image
                  className='d-block w-100 carousel-style'
                  src={back}
                  alt='Second slide'
                  fluid
                />

                <Carousel.Caption>
                  <h3>Event List</h3>
                  <p className='carousel-text'>
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
                            {events.map((events) => (
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
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <Row className='card-container'>
                  {events
                    .reverse()
                    .slice(0, 3)
                    .map((event) => (
                      <Col key={event.id}>
                        <Card className='h-100'>
                          <Card.Body>
                            <Card.Title className='mb-2 text-dark'>
                              Event Title: {event.title}
                            </Card.Title>
                            <Card.Text className='text-dark'>
                              Event Coordinator:{' '}
                              <span>{event.coordinator}</span>
                            </Card.Text>
                            <Card.Subtitle className='text-dark'>
                              Event Description: {event.description}
                            </Card.Subtitle>

                            <img
                              src={event.images}
                              style={{ height: '50% ' }}
                              alt={'Image Missing'}
                            ></img>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                </Row>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Home
