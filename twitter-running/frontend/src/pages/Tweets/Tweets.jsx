import React from 'react'
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

const Tweets = () => {
  const dispatch = useDispatch()
  var tweetList = useSelector((state) => state.tweetList)
  var { loading, error, tweets } = tweetList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(6)

  useEffect(() => {
    dispatch(listTweets())
  }, [dispatch])

  function refreshPage() {
    window.location.reload(true)
  }

  function change(str) {
    //console.log('changed on Database')
    if (str.message === 'a') {
      const element = document.getElementById(str.name) // Get element
      if (element != null) {
        element.style.visibility = 'visible'
        console.log('changed on Database')
      } else {
        //console.log('changed on Database')
        axios.get(config.geturl() + `tweets?status=ACCEPTED`).then((res) => {
      tweets = res.data.tweets 
    })
        
      }
    }

    if (str.message === 'c') {
      refreshPage()
    }
  }

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  var currentTweets = tweets.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

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
          <Container fluid>
            <Row className='card-container'>
              {currentTweets.map((tweet) => (
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
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={tweets.length}
              paginate={paginate}
            />
          </Container>
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
