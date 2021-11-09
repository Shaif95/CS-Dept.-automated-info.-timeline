import TopBar from './components/TopBar/TopBar'
import './bootstrap.min.css'
import './App.scss'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Event from './pages/Event/Event'
import Grant from './pages/Grant/Grant'
import Forbidden from './pages/Forbidden/Forbidden'
import Academic from './pages/Academic/Academic'
import { Route } from 'react-router-dom'
import NotFound from './pages/NotFound/NotFound'
import Profile from './pages/Profile/Profile'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Switch } from 'react-router-dom'

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
            <Route exact path='/event' component={Event} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/registration' component={Register} />
            <Route exact path='/forbidden' component={Forbidden} />
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
