import TopBar from './components/TopBar/TopBar'
import './bootstrap.min.css'
import './App.scss'
import $ from 'jquery';
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Event from './pages/Event/Event'
import Grant from './pages/Grant/Grant'
import Forbidden from './pages/Forbidden/Forbidden'
import Academic from './pages/Academic/Academic'
import NotFound from './pages/NotFound/NotFound'
import Profile from './pages/Profile/Profile'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
      BrowserRouter as Router,
      Routes,
      Switch,
      Route,
      Link
    } from "react-router-dom";



import ListEmployeeComponent from './components/ListEmployeeComponent';
import HomeComponent from './components/HomeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import ListGrantsComponent from './components/ListGrantComponent';
import CreateGrantsComponent from './components/CreateGrantsComponent';
import UpdateGrantComponent from './components/UpdateGrantComponent';
import ViewGrantComponent from './components/ViewGrantComponent';

function App() {
  return (
    <>
      <TopBar />
      <div className='content-wrapper'>
        <div className='main-content'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/grant' component={Grant} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/academic' component={Academic} />

            <Route exact path='/login' component={Login} />
            <Route exact path='/registration' component={Register} />
            <Route exact path='/forbidden' component={Forbidden} />


            <Route path = "/grants"  exact component = {ListGrantsComponent}></Route>                                
            <Route path = "/events" exact  component = {ListEmployeeComponent}></Route> 
            <Route path = "/home" exact component = {HomeComponent}></Route>                                               
            <Route path = "/add-events/:id" component = {CreateEmployeeComponent}></Route>
            <Route path = "/add-grants/:id" component = {CreateGrantsComponent}></Route>
            <Route path = "/view-events/:id" component = {ViewEmployeeComponent}></Route>                                       
            <Route path = "/update-events/:id" component = {UpdateEmployeeComponent}></Route>
            <Route path = "/view-grants/:id" component = {ViewGrantComponent}></Route>                                       
            <Route path = "/update-grants/:id" component = {UpdateGrantComponent}></Route>
           
            

                           <Route path='' component={NotFound} />

          </Switch>
        </div>
      </div>
      <ToastContainer
        position='bottom-right'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={2}
      />
    </>
  )
}

export default App