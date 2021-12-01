import React, { Component } from 'react'
import EventService from '../services/EventService';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

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
            images : ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveOrUpdateEvent = this.saveOrUpdateEvent.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            EventService.getEventById(this.state.id).then( (res) =>{
                let em = res.data;
                this.setState({title: em.title,
                    coordinator: em.coordinator,
                    description : em.description,
                    images : em.images
                });
            });
        }        
    }
    saveOrUpdateEvent = (e) => {
        e.preventDefault();
    let em = {title: this.state.title, coordinator: this.state.coordinator, description: this.state.description, images : this.state.images};
        console.log('event => ' + JSON.stringify(em));

        // step 5
        if(this.state.id === '_add'){
            EventService.createEvent(em).then(res =>{
                this.props.history.push('/events');
            });
        }else{
            EventService.updateEvent(em, this.state.id).then( res => {
                this.props.history.push('/events');
            });
        }
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({title: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({coordinator: event.target.value});
    }

    changeImageHandler= (event) => {

        const img =[];
        img.push(event.target.value)

        this.setState({images: img});
    }

    changeEmailHandler= (event) => {
        this.setState({description: event.target.value});
    }

    cancel(){
        this.props.history.push('/events');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Event Information Form</h3>
        }else{
            return <h3 className="text-center">Event Information Form</h3>
        }
    }
    render() {
        return (
            <div>
      <label style={{color: 'black'}} > All fields are required </label>
                   <div style={{color: 'black'}}  className = "form-group">
                                {
                                    this.getTitle()
                                }
                                    <form>
                                        <div className = "form-group">
                                            <label style={{color: 'black'}} > Event Title: </label>
                                            <input placeholder="Title" name="title" className="form-control" 
                                                value={this.state.title} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label style={{color: 'black'}} > Event Coordinator: </label>
                                            <input placeholder="coordinator" name="coordinator" className="form-control" 
                                                value={this.state.coordinator} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label style={{color: 'black'}} > Event Description: </label>
                                           <CKEditor name="description" 
                    editor={ ClassicEditor }
                placeholder="Description" 
                value={this.state.description}
                onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        this.setState({description: data});
                    } }
           
                
                />
                                        </div>

                        <div className = "form-group">
                                            <label style={{color: 'black'}} > Event Image: </label>
                                            <input placeholder=" url, example : https://ibb.co/vsjK0Fb" name="images" className="form-control" 
                                                value={this.state.images} onChange={this.changeImageHandler}/>

          <label style={{color: 'black'}} > in case of no image , put default image url : https://i.ibb.co/nCNb8KX/photo-1541963463532-d68292c34b19-ixlib-rb-1-2.jpg </label>
                                        </div>

                                


                                        <button className="btn btn-success" onClick={this.saveOrUpdateEvent}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                            
                   </div>
            </div>
        )
    }
}

export default CreateEventComponent
