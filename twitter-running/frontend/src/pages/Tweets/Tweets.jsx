import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listTweets } from '../../actions/userActions'
import Meta from '../../components/Meta'
import './Tweets.scss'

const Tweets = () => {
  const dispatch = useDispatch()
  const tweetList = useSelector((state) => state.tweetList)
  const { loading, error, tweets } = tweetList

  useEffect(() => {
    dispatch(listTweets())
  }, [dispatch])

  return (
    <>
      <Meta title='Tweets' />
      <Container fluid className='home-container'>
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

export default Tweets
