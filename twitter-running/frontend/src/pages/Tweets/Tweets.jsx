import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listTweets } from '../../actions/userActions'
import Meta from '../../components/Meta'
import './Tweets.scss'
import AddIcon from '@mui/icons-material/Add'
import { Link } from 'react-router-dom'


const Tweets = () => {
  const dispatch = useDispatch()
  const tweetList = useSelector((state) => state.tweetList)
  const { loading, error, tweets } = tweetList
  const newtweets = []

  const redirect = '/login'

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

for (let i = 0; i < tweets.length; i++) {
 
  if(tweets[i].status == "ACCEPTED")
  {
    console.log("happend")
    newtweets.push(tweets[i])
  }

}
  

  useEffect(() => {
    dispatch(listTweets())
  }, [dispatch])

  return (
    <>
      <Meta title='Tweets' />
      <Container fluid className='home-container'>
        {userInfo && userInfo.role === 'ADMIN' ? (
          <Row className='justify-content-end m-2'>
            <Link to='/whitelist-users'>
              <Button variant='success'>
                <AddIcon />
                Add Whitelist User
              </Button>
            </Link>
          </Row>
        ) : (
          ''
        )}
        {loading ? (
          <></>
        ) : error ? (
          <></>
        ) : (
          <Row className='card-container'>
            {newtweets.map((tweet) => (
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
