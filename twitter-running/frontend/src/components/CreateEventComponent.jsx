import React, { Component } from 'react'
import EventService from '../services/EventService'

import './res/grant.css'

class CreateEventComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // step 2
      id: this.props.match.params.id,
      title: '',
      coordinator: '',
      description: '',
      images: '',
    }
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this)
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this)
    this.changeLLastNameHandler = this.changeLLastNameHandler.bind(this)
    this.saveOrUpdateEvent = this.saveOrUpdateEvent.bind(this)
  }

  // step 3
  componentDidMount() {
    // step 4
    if (this.state.id === '_add') {
      return
    } else {
      EventService.getEventById(this.state.id).then((res) => {
        let em = res.data
        this.setState({
          title: em.title,
          coordinator: em.coordinator,
          description: em.description,
          images: em.images,
        })
      })
    }
  }
  saveOrUpdateEvent = (e) => {
    e.preventDefault()

    const img1 = []
    let em = null

    if (
      this.state.title.length === 0 ||
      this.state.coordinator.length === 0 ||
      this.state.title.description === 0
    ) {
      alert('All fields are needed other than images')
    } else {
      if (this.state.images.length === 0) {
        console.log('Default Image')
        img1.push('https://i.ibb.co/zmmxXb3/whiteback.jpg')
        //console.log(img)

        em = {
          title: this.state.title,
          coordinator: this.state.coordinator,
          description: this.state.description,
          images: img1,
        }
        console.log('event => ' + JSON.stringify(em))
      } else {
        em = {
          title: this.state.title,
          coordinator: this.state.coordinator,
          description: this.state.description,
          images: this.state.images,
        }
        console.log('event => ' + JSON.stringify(em))
      }

      // step 5
      if (this.state.id === '_add') {
        EventService.createEvent(em).then((res) => {
          this.props.history.push('/userevents')
        })
      } else {
        EventService.updateEvent(em, this.state.id).then((res) => {
          this.props.history.push('/userevents')
        })
      }
    }
  }

  changeFirstNameHandler = (event) => {
    this.setState({ title: event.target.value })
  }

  changeLastNameHandler = (event) => {
    this.setState({ coordinator: event.target.value })
  }

  changeLLastNameHandler = (event) => {
    this.setState({ description: event.target.value })
  }

  changeImageHandler = (event) => {
    const img = []

    img.push(event.target.value)

    this.setState({ images: img })
  }

  changeEmailHandler = (event) => {
    this.setState({ description: event.target.value })
  }

  cancel() {
    this.props.history.push('/userevents')
  }

  getTitle() {
    if (this.state.id === '_add') {
      return <h3 className='text-center'>Event Information Form</h3>
    } else {
      return <h3 className='text-center'>Event Information Form</h3>
    }
  }
  render() {
    return (
      <div>
        <label style={{ color: 'black' }}> All fields are required </label>
        <div style={{ color: 'black' }} className='form-group'>
          {this.getTitle()}
          <form>
            <div className='form-group'>
              <label style={{ color: 'black' }}> Event Title: </label>
              <input
                placeholder='Title'
                name='title'
                className='form-control'
                value={this.state.title}
                onChange={this.changeFirstNameHandler}
              />
            </div>
            <div className='form-group'>
              <label style={{ color: 'black' }}> Event Coordinator: </label>
              <input
                placeholder='coordinator'
                name='coordinator'
                className='form-control'
                value={this.state.coordinator}
                onChange={this.changeLastNameHandler}
              />
            </div>
            <div className='form-group'>
              <label style={{ color: 'black' }}> Event Description: </label>
              <input
                placeholder='Title'
                name='title'
                className='form-control'
                value={this.state.description}
                onChange={this.changeLLastNameHandler}
              />
            </div>

            <div className='form-group'>
              <label style={{ color: 'black' }}> Event Image: </label>
              <input
                placeholder=' url, example : https://ibb.co/vsjK0Fb'
                name='images'
                className='form-control'
                value={this.state.images}
                onChange={this.changeImageHandler}
              />

              <label style={{ color: 'black' }}>
                {' '}
                in case of no image , put default image url :
                https://i.ibb.co/nCNb8KX/photo-1541963463532-d68292c34b19-ixlib-rb-1-2.jpg{' '}
              </label>
            </div>

            <button
              className='btn btn-success'
              onClick={this.saveOrUpdateEvent}
            >
              Save
            </button>
            <button
              className='btn btn-danger'
              onClick={this.cancel.bind(this)}
              style={{ marginLeft: '10px' }}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default CreateEventComponent
