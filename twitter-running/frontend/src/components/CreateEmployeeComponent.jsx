import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import './res/grant.css'

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            title: '',
            coordinator: '',
            description: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
                let employee = res.data;
                this.setState({title: employee.title,
                    coordinator: employee.coordinator,
                    description : employee.description
                });
            });
        }        
    }
    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {title: this.state.title, coordinator: this.state.coordinator, description: this.state.description};
        console.log('employee => ' + JSON.stringify(employee));

        // step 5
        if(this.state.id === '_add'){
            EmployeeService.createEmployee(employee).then(res =>{
                this.props.history.push('/events');
            });
        }else{
            EmployeeService.updateEmployee(employee, this.state.id).then( res => {
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
                                            <label style={{color: 'black'}}> Event Date: </label>
                                            <input placeholder="Date" name="description" className="form-control" />
                                        </div>




                                        <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                            
                   </div>
            </div>
        )
    }
}

export default CreateEmployeeComponent
