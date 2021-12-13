import React, { Component } from 'react'
import EventService from '../services/EventService'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios'
import config from '../services/config'

import './res/grant.css'

class CreateEventComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
   
    this.delete = this.delete.bind(this)

    this.cancel = this.cancel.bind(this)
  }

  // step 3
  componentDidMount() {
    // step 4
    
  }

 delete () {
    
    console.log("started")

    axios.delete(config.geturl() + `tweets`).then((res) => {
      this.props.history.push('/adminpage')
    })

     
  }

 

  cancel() {
    console.log("Worked")
    this.props.history.push('/adminpage')
  }

 
  render() {
    return (
      <div>
        <h2 className='text-center'>Would You like to delete all tweets?</h2>

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
                  <button onClick={this.delete} style={{ marginLeft: '10px' }}>
                   Delete All previous Tweets
                  </button>{' '}
                </td>
              </tr>

              <tr>
                <td>
                  {' '}
                  <button  onClick={this.cancel} style={{ marginLeft: '10px' }}>
                  Cancel
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

export default CreateEventComponent
