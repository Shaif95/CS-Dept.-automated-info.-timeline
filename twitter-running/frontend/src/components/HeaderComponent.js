import React, { Component } from 'react'
import {
      BrowserRouter as Router,
      Routes,
      Switch,
      Route,
      Link
    } from "react-router-dom";
import EmployeeService from '../services/EmployeeService'
import './res/grant.css'

class HeaderComponent extends Component {
    constructor(props) {
       
        super(props)

     this.home= this.home.bind(this);

      
    }

    home(){
        this.props.history.push('/home');
    }


    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://baylor-board.herokuapp.com/swagger-ui/index.html?configUrl=/v3/api-docs/swagger-config#/" className="navbar-brand">Baylor Board API</a></div>
                    <div> <Link class="nav-link" to="/home" className="navbar-brand" >Home</Link></div>
                    <div> <Link class="nav-link" to="/events" className="navbar-brand" >Events</Link></div>
                    <div> <Link class="nav-link" to="/add-employee/_add" className="navbar-brand" >Add Event</Link></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent
