// import logo from './logo.svg'
import './res/event.css'
import './App.css'
import './res/index.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'
// import Popper from 'popper.js'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Nav from './component/Nav'
import Event from './pages/Event'
import Grant from './pages/Grant'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/event' element={<Event />} />
        <Route exact path='/grant' element={<Grant />} />
      </Routes>
    </>
  )
}

export default App
