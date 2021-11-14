import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'
import './res/grant.css'

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div  style={{color: 'black'}} className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Event Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label style={{color: 'black'}} > Event Title: </label>
                            <div> { this.state.employee.title }</div>
                        </div>
                        <div className = "row">
                            <label style={{color: 'black'}} > Event Coordinator: </label>
                            <div> { this.state.employee.coordinator }</div>
                        </div>
                        <div className = "row">
                            <label style={{color: 'black'}} > Event Description: </label>
                            <div> { this.state.employee.description }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent
