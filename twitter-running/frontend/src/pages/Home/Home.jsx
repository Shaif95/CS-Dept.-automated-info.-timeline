import React from 'react'
import { Container, Row, Col, Card, Carousel, Image } from 'react-bootstrap'
import './Home.scss'
 import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listTweets } from '../../actions/userActions'
import { listEvents } from '../../actions/userActions'
import Meta from '../../components/Meta'
import banner1 from '../../assets/img/banner1.jpg'
import banner2 from '../../assets/img/banner2.jpg'
import fac from '../../assets/img/la.jpg'
import back from '../../assets/img/baylor_background.jpg'


const Home = () => {


  const dispatch = useDispatch()
  const tweetList = useSelector((state) => state.tweetList)
  const { loading, error, tweets } = tweetList

  useEffect(() => {
    dispatch(listTweets())
  }, [dispatch])

const baseURL = "https://baylor-board.herokuapp.com/events";


  const [events, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!events) return null;



 const events1 = axios.get("https://baylor-board.herokuapp.com/events");




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
 <h2 className="text-center"> Recent Events </h2>
<div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Event Title </th>
                                    <th> Event Coordinator </th>
                                    <th> Event Description </th>
                                    <th> Actions </th>
                                </tr>
                            </thead>
                            <tbody>
                              {
                                    events.map(
                                        events =>
                                        <tr key = {events.id}>
                                             <td> { events.title} </td>   
                                             <td> {events.coordinator}</td>
                                             <td> {events.description}</td>
                                             <td>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(events.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

                </div>


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