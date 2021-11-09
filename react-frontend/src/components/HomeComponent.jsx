import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import EmployeeService from '../services/EmployeeService'

class HomeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }
    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`);
    }
    editEmployee(id){
        this.props.history.push(`/add-employee/${id}`);
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }

    addEmployee(){
        this.props.history.push('/add-employee/_add');
    }


    render() {
        return (
        

<Carousel>

                

               


                <div>
                    <img src={require('./la.jpg')} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={require('./chicago.jpg')}/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={require('./ny.jpg')} />
                    <p className="legend">Legend 3</p>
                </div>
                


                 <div>
 <h2 className="text-center"> Recent Events </h2>
<div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Event Title </th>
                                    <th> Event Coordinator </th>
                                    <th> Event Description </th>
                                    <th> Actions </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee => 
                                        <tr key = {employee.id}>
                                             <td> { employee.title} </td>   
                                             <td> {employee.coordinator}</td>
                                             <td> {employee.description}</td>
                                             <td>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

                </div>

                

            </Carousel>




        )
    }
}

export default HomeComponent
