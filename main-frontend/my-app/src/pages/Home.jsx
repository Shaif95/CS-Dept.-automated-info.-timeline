import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Home = () => {
  const [tweets, setTweets] = useState([])
  useEffect(() => {
    axios.get('https://baylor-board.herokuapp.com/tweets').then((res) => {
      setTweets(res.data.tweets)
    })
  }, [setTweets])
  return (
    <>
      <div id='demo' className='carousel slide mt-5' data-ride='carousel'>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <div className='row padding-1'>
              <div className='col .padding-0'>
                <div className='container'>
                  <img
                    src='../res/la.jpg'
                    style={{ height: '400px', width: '200 px !important' }}
                    alt='Los Angeles'
                  />
                </div>
              </div>
              <div className='col .padding-0'>
                <div className='container'>
                  <img
                    src='../res/chicago.jpg'
                    style={{ height: '400px', width: '200 px !important' }}
                    alt='Chicago'
                  />
                </div>
              </div>
              <div className='col .padding-0'>
                <div className='container'>
                  <img
                    src='../res/ny.jpg'
                    style={{ height: '400px', width: '200 px !important' }}
                    alt='New York'
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='carousel-item'>
            <div className='container' style={{ marginTop: '15px !important' }}>
              <div className='card-deck' style={{ paddingRight: '100px' }}>
                <div className='card' style={{ width: '500px' }}>
                  <img
                    className='card-img-top'
                    src='../res/ny.jpg'
                    alt='Card image cap'
                  />
                  <div className='card-body'>
                    <h5 className='card-title'>
                      Title : Rapid Analysis of Dreissenid Veliger Prevalence.
                    </h5>
                    <p className='card-text'>
                      Faculty : Greg Hamerly Ryan McManamay.
                    </p>
                    <p className='card-text'>
                      <small className='text-muted'>
                        <button className='btn btn-default'>
                          More Details
                        </button>
                      </small>
                    </p>
                  </div>
                </div>
                <div className='card' style={{ width: '500px' }}>
                  <img
                    className='card-img-top'
                    src='../res/la.jpg'
                    alt='Card image cap'
                  />
                  <div className='card-body'>
                    <h5 className='card-title'>Title : List of Faculty.</h5>
                    <p className='card-text'>
                      Faculty : Baylor University Computer Science.
                    </p>
                    <p className='card-text'>
                      <small className='text-muted'>
                        <button className='btn btn-default'>
                          More Details
                        </button>
                      </small>
                    </p>
                  </div>
                </div>
                <div className='card' style={{ width: '500px' }}>
                  <img
                    className='card-img-top'
                    src='../res/chicago.jpg'
                    alt='Card image cap'
                  />
                  <div className='card-body'>
                    <h5 className='card-title'>Title : Map.</h5>
                    <p className='card-text'>Candace Ditch.</p>
                    <p className='card-text'>
                      <small className='text-muted'>
                        <button className='btn btn-default'>
                          More Details
                        </button>
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a className='carousel-control-prev' href='#demo' data-slide='prev'>
        <span className='carousel-control-prev-icon'></span>
      </a>
      <a className='carousel-control-next' href='#demo' data-slide='next'>
        <span className='carousel-control-next-icon'></span>
      </a>

      <div className='row mt-5'>
        {tweets.map((tweet) => (
          <div className='col-md-4 col-sm-3 pl-3 mt-2' key={tweet.id}>
            <div class='card'>
              <h5 class='card-header'>UserName : {tweet.user}</h5>
              <div class='card-body'>
                <h5 class='card-title'>
                  {' '}
                  Tweet: <span>{tweet.text}</span>
                </h5>
                <p class='card-text'>Status: {tweet.status}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home
