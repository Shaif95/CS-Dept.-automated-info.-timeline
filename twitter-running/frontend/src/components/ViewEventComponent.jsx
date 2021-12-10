import React, { Component } from 'react'
import EventService from '../services/EventService'
import './res/grant.css'

class ViewEventComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            event: {}
        }
    }

    componentDidMount(){
        EventService.getEventById(this.state.id).then( res => {
            this.setState({event: res.data});
        })
    }

    render() {
        return (
          <div>
            <br></br>
            <div
              style={{ color: 'black' }}
              className='card col-md-6 offset-md-3'
            >
              <h3 className='text-center'> View Event Details</h3>
              <div className='card-body'>
                <div className='row'>
                  <label style={{ color: 'black' }}> Event Title: </label>
                  <div> {this.state.event.title}</div>
                </div>
                <div className='row'>
                  <label style={{ color: 'black' }}> Event Coordinator: </label>
                  <div> {this.state.event.coordinator}</div>
                </div>
                <div className='row'>
                  <label style={{ color: 'black' }}> Event Description: </label>
                  <div> {this.state.event.description}</div>
                </div>

                <div className='row'>
                  <label style={{ color: 'black' }}> Event Image: </label>
                  <div>
                    {' '}
                    <img
                      src={this.state.event.images}
                      style={{ height: '50% ' }}
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default ViewEventComponent
