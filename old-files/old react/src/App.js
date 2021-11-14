import React from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import background from "./res/dark_back.jpg";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {
      BrowserRouter as Router,
      Routes,
      Switch,
      Route,
      Link
    } from "react-router-dom";
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import HomeComponent from './components/HomeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import ListGrantsComponent from './components/ListGrantComponent';
import CreateGrantsComponent from './components/CreateGrantsComponent';
import UpdateGrantComponent from './components/UpdateGrantComponent';
import ViewGrantComponent from './components/ViewGrantComponent';

global.jQuery = require('jquery');
require('bootstrap');




function App() {
  return (
    <div style={  { backgroundColor: 'gray' , backgroundRepeat: 'no-repeat', backgroundsize: 'cover' }  }>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {HomeComponent}></Route>
                          <Route path = "/grants"  exact component = {ListGrantsComponent}></Route>                                
                          <Route path = "/events" exact  component = {ListEmployeeComponent}></Route> 
                          <Route path = "/home" exact component = {HomeComponent}></Route>                                               
                          <Route path = "/add-events/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/add-grants/:id" component = {CreateGrantsComponent}></Route>
                          <Route path = "/view-events/:id" component = {ViewEmployeeComponent}></Route>                                       
                          <Route path = "/update-events/:id" component = {UpdateEmployeeComponent}></Route>
                          <Route path = "/view-grants/:id" component = {ViewGrantComponent}></Route>                                       
                          <Route path = "/update-grants/:id" component = {UpdateGrantComponent}></Route> 
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
