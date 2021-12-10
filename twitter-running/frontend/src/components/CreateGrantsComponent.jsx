import React, { Component } from 'react'
import GrantService from '../services/GrantService';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import './res/grant.css'

class CreateGrantsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            title: '',
            description: ''
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
            GrantService.getGrantById(this.state.id).then( (res) =>{
                let em = res.data;
                this.setState({title: em.title,
                    description : em.description
                });
            });
        }        
    }
    saveOrUpdateEvent = (e) => {
        e.preventDefault();

        if( this.state.title.length === 0 || this.state.title.description === 0)
           {
           alert("All fields are needed other than images");
           }

           else
           {

    let em = {title: this.state.title, description: this.state.description};
        console.log('award => ' + JSON.stringify(em));

        // step 5
        if(this.state.id === '_add'){
            GrantService.createGrant(em).then(res =>{
                this.props.history.push('/userawards');
            });
        }else{
            GrantService.updateGrant(em, this.state.id).then( res => {
                this.props.history.push('/userawards');
            });
        }
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
        this.props.history.push('/userawards');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Award Information Form</h3>
        }else{
            return <h3 className="text-center">Award Information Form</h3>
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
                                            <label style={{color: 'black'}} > Award Title: </label>
                                            <input placeholder="Title" name="title" className="form-control" 
                                                value={this.state.title} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                       
                                        <div className = "form-group">
                                            <label style={{color: 'black'}} > Award Description: </label>
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

                        

                                


                                        <button className="btn btn-success" onClick={this.saveOrUpdateEvent}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                            
                   </div>
            </div>
        )
    }
}

export default CreateGrantsComponent
