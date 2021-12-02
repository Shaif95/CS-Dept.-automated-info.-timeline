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
            description: '',
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveOrUpdateGrant = this.saveOrUpdateGrant.bind(this);
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
                    description : em.description,
                });
            });
        }        
    }
    saveOrUpdateGrant = (e) => {
        e.prGrantDefault();
    let em = {title: this.state.title,  description: this.state.description};
        console.log('Grant => ' + JSON.stringify(em));

        // step 5
        if(this.state.id === '_add'){
            GrantService.createGrant(em).then(res =>{
                this.props.history.push('/awards');
            });
        }else{
            GrantService.updateGrant(em, this.state.id).then( res => {
                this.props.history.push('/awards');
            });
        }
    }
    
    changeFirstNameHandler= (Grant) => {
        this.setState({title: Grant.target.value});
    }

    changeLastNameHandler= (Grant) => {
        this.setState({coordinator: Grant.target.value});
    }

    changeImageHandler= (Grant) => {

        const img =[];
        img.push(Grant.target.value)

    
    }

    changeEmailHandler= (Grant) => {
        this.setState({description: Grant.target.value});
    }

    cancel(){
        this.props.history.push('/awards');
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
                onChange={ ( Grant, editor ) => {
                        const data = editor.getData();
                        this.setState({description: data});
                    } }
           
                
                />
                                        </div>

                        

                                


                                        <button className="btn btn-success" onClick={this.saveOrUpdateGrant}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                            
                   </div>
            </div>
        )
    }
}

export default CreateGrantsComponent
