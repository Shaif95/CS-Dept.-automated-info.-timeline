
import './bootstrap.min.css'
import './App.scss'
import $ from 'jquery';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
      BrowserRouter as Router,
      Routes,
      Switch,
      Route,
      Link
    } from "react-router-dom";



import HomeComponent from './components/HomeComponent';


function App() {
  return (
    <>

        <div className='main-content'>
          <Switch>
            <Route exact path='/' component={HomeComponent} />
           
        
          </Switch>
        </div>

    
    </>
  )
}

export default App
