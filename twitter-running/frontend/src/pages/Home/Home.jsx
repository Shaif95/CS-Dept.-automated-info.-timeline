import React from 'react'
import { Container, Row, Col, Card, Carousel, Image } from 'react-bootstrap'
import './Home.scss'
// import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listTweets } from '../../actions/userActions'
import Meta from '../../components/Meta'
import banner1 from '../../assets/img/banner1.jpg'
import banner2 from '../../assets/img/banner2.jpg'


const Home = () => {
  const dispatch = useDispatch()
  const tweetList = useSelector((state) => state.tweetList)
  const { loading, error, tweets } = tweetList
  useEffect(() => {
    dispatch(listTweets())
  }, [dispatch])

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
            </Carousel>
          </div>
        </div>

        {loading ? (
          <></>
        ) : error ? (
          <></>
        ) : (
          <Row className='card-container'>
            {tweets.map((tweet) => (
              <Col lg={4} md={6} key={tweet.id}>
                <Card>
                  <Card.Body>
                    <Card.Title className='mb-2 text-dark'>
                      UserName : {tweet.user}
                    </Card.Title>
                    <Card.Text className='text-dark'>
                      Tweet: <span>{tweet.text}</span>
                    </Card.Text>
                    <Card.Subtitle className='text-dark'>
                      Status: {tweet.status}
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  )
}

export default Home
