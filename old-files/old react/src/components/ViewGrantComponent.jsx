import React, { Component } from 'react'
import EmployeeService from '../services/GrantService'
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
                    <h3 className = "text-center"> View Grant Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label style={{color: 'black'}} > Grant Title: </label>
                            <div> { this.state.employee.title }</div>
                        </div>
                        <div className = "row">
                            <label style={{color: 'black'}} > Grant PI: </label>
                            <div> { this.state.employee.grantpi }</div>
                        </div>
                        <div className = "row">
                            <label style={{color: 'black'}} > Grant Abstract: </label>
                            <div> { this.state.employee.abst }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent
