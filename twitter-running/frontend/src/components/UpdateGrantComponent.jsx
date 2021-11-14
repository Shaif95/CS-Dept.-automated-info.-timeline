import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';
import './res/grant.css'
import axios from 'axios';

class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            title: '',
            coordinator: '',
            description: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
            let employee = res.data;
            this.setState({title: employee.title,
                coordinator: employee.coordinator,
                description : employee.description
            });
        });
    }

    updateEmployee = (e) => {
        e.preventDefault();
        let employee = JSON.stringify( {title: this.state.title, coordinator: this.state.coordinator, description: this.state.description});
        console.log('id => ' + JSON.stringify(this.state.id));
       // EmployeeService.updateEmployee( this.state.id, employee)
       let old_id = this.state.id;
       console.log(employee)

        axios.put('https://baylor-board.herokuapp.com/events/'+old_id,  employee, { headers: {    'Content-Type': 'application/json' } });

        this.props.history.push('/events');
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

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Event</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label style={{color: 'black'}}> Title: </label>
                                            <input placeholder="title" name="title" className="form-control" 
                                                value={this.state.title} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label style={{color: 'black'}}> Coordinaotr: </label>
                                            <input placeholder="coordinator" name="coordinator" className="form-control" 
                                                value={this.state.coordinator} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label style={{color: 'black'}}> Description: </label>
                                            <input placeholder="description" name="description" className="form-control" 
                                                value={this.state.description} onChange={this.changeEmailHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateEmployeeComponent
