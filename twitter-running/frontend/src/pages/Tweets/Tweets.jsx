import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listTweets } from '../../actions/userActions'
import Meta from '../../components/Meta'
import './Tweets.scss'
import AddIcon from '@mui/icons-material/Add'
import { Link } from 'react-router-dom'
import SockJsClient from 'react-stomp'

const Tweets = () => {
  const dispatch = useDispatch()
  const tweetList = useSelector((state) => state.tweetList)
  const { loading, error, tweets } = tweetList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    dispatch(listTweets())
  }, [dispatch])

  function refreshPage() {
    window.location.reload(true)
  }

  function change(str) {
    if (str.message === 'a') {
      const element = document.getElementById(str.name) // Get element
      if (element != null) {
        element.style.visibility = 'visible'
        console.log('changed on Database')
      } else {
        refreshPage()
      }
    }

    if (str.message === 'c') {
      refreshPage()
    }
  }

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
            {tweets.slice(0, 30).map((tweet) => (
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
        )}
      </Container>

      <div>
        <SockJsClient
          url='https://baylor-board.herokuapp.com/websocket-chat/'
          topics={['/topic/user']}
          onConnect={console.log('Connection established!')}
          //onDisconnect={console.log("Disconnected!")}
          onMessage={(msg) => {
            console.log(msg.name)
            change(msg)
          }}
        />
      </div>
    </>
  )
}

export default Tweets
