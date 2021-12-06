import axios from 'axios';
import config from '../services/config';

export const listTweets = () => async (dispatch) => {
  try {
    dispatch({ type: 'TWEET_LIST_REQUEST' })

    const { data } = await axios.get(
       config.geturl() + "tweets"
    )

    dispatch({
      type: 'TWEET_LIST_SUCCESS',
      payload: data.tweets,
    })
  } catch (error) {
    dispatch({
      type: 'TWEET_LIST_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}



export const login =
  ({ emailAddress, password }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: 'USER_LOGIN_REQUEST',
      })

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      const { data } = await axios.post(
        // http://localhost:8080/users/login
        'https://baylor-board.herokuapp.com/users/login',
        { emailAddress, password },
        config
      )

      dispatch({
        type: 'USER_LOGIN_SUCCESS',
        payload: data,
      })

      localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
      dispatch({
        type: 'USER_LOGIN_FAIL',
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

export const register =
  ({ firstName, lastName, emailAddress, password }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: 'USER_REGISTER_REQUEST',
      })

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      const { data } = await axios.post(
        'https://baylor-board.herokuapp.com/users/',
        { firstName, lastName, emailAddress, password },
        config
      )

      dispatch({
        type: 'USER_REGISTER_SUCCESS',
        payload: data,
      })

      dispatch({
        type: 'USER_LOGIN_SUCCESS',
        payload: data,
      })

      localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
      dispatch({
        type: 'USER_REGISTER_FAIL',
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo')
  dispatch({ type: 'USER_LOGOUT' })
}
