import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import EventService from '../services/EventService'
import './res/grant.css'

class ListEventComponent extends Component {
  componentDidMount() {
    EventService.getEvent().then((res) => {
      this.setState({ event: res.data.events })
    })
  }

  render() {
    return (
      <div>
        <h2 className='text-center'>Welcome to Admin Page</h2>

        <br></br>
        <div className='row'>
          <table className='table table-striped table-bordered'>
            <thead>
              <tr className='text-center'>
                <th> Actions</th>
              </tr>
            </thead>
            <tbody className='text-center'>
              <tr>
                <td>
                  {' '}
                  <button style={{ marginLeft: '10px' }}>
                    <Link to='/events'>Manage Events</Link>{' '}
                  </button>{' '}
                </td>
              </tr>
              <tr>
                <td>
                  {' '}
                  <button style={{ marginLeft: '10px' }}>
                    <Link to='/awards'>Manage Awards</Link>{' '}
                  </button>{' '}
                </td>
              </tr>

              <tr>
                <td>
                  {' '}
                  <button style={{ marginLeft: '10px' }}>
                    <Link to='/admintweet'>Manage Tweets</Link>{' '}
                  </button>{' '}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default ListEventComponent
