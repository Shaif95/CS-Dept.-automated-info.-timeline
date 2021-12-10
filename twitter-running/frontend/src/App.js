import TopBar from './components/TopBar/TopBar'
import './bootstrap.min.css'
import './App.scss'
import Home from './pages/Home/Home'
import Tweets from './pages/Tweets/Tweets'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Grant from './pages/Grant/Grant'
import Forbidden from './pages/Forbidden/Forbidden'
import Academic from './pages/Academic/Academic'
import Profile from './pages/Profile/Profile'
import AddUser from './pages/AddUser/AddUser'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Switch, Route } from 'react-router-dom'

import ListEventComponent from './components/ListEventComponent'
import HomeComponent from './components/HomeComponent'
import CreateEventComponent from './components/CreateEventComponent'
import UpdateEventComponent from './components/UpdateEventComponent'
import ViewEventComponent from './components/ViewEventComponent'
import ListGrantsComponent from './components/ListGrantComponent'
import CreateGrantsComponent from './components/CreateGrantsComponent'
import UpdateGrantComponent from './components/UpdateGrantComponent'
import ViewGrantComponent from './components/ViewGrantComponent'

import UserEvent from './components/ListUserEventComponent';
import UserGrant from './components/ListUserGrantComponent';
import AdminTweet from './components/AdminTweet';
import AdminPage from './components/AdminPage';


function App() {
  return (
    <>
      <TopBar />
      <div className='content-wrapper'>
        <div className='main-content'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/tweets/:id?' component={Tweets} />
            <Route exact path='/grant' component={Grant} />
            <Route exact path='/admintweet' component={AdminTweet} />
            <Route exact path='/adminpage' component={AdminPage} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/academic' component={Academic} />

            <Route exact path='/whitelist-users' component={AddUser} />

            <Route exact path='/userevents' component={UserEvent} />
            <Route exact path='/userawards' component={UserGrant} />

            <Route exact path='/login' component={Login} />
            <Route exact path='/registration' component={Register} />
            <Route exact path='/forbidden' component={Forbidden} />

            <Route path='/awards' exact component={ListGrantsComponent}></Route>
            <Route path='/events' exact component={ListEventComponent}></Route>
            <Route path='/home' exact component={HomeComponent}></Route>
            <Route
              path='/add-events/:id'
              component={CreateEventComponent}
            ></Route>
            <Route
              path='/add-grants/:id'
              component={CreateGrantsComponent}
            ></Route>
            <Route
              path='/view-events/:id'
              component={ViewEventComponent}
            ></Route>
            <Route
              path='/update-events/:id'
              component={UpdateEventComponent}
            ></Route>
            <Route
              path='/view-grants/:id'
              component={ViewGrantComponent}
            ></Route>
            <Route
              path='/update-grants/:id'
              component={UpdateGrantComponent}
            ></Route>

            {/* <Route path='' component={NotFound} /> */}
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
