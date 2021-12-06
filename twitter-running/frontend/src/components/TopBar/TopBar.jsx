import { Navbar, NavDropdown, Container } from 'react-bootstrap'
// import Nav from 'react-bootstrap/Nav'
import { Person } from '@material-ui/icons'
import LoginIcon from '@mui/icons-material/Login'
// import LogoutIcon from '@mui/icons-material/Logout';
import './TopBar.scss'
import { Link } from 'react-router-dom'
import { MonetizationOn, Event } from '@material-ui/icons'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../actions/userActions'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'

const TopBar = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const AvatarComp = ({ role }) => {
    return (
      <>
        <Person />
        {role}
      </>
    )
  }

  const [show, setShow] = useState(false)
  const showDropdown = (e) => {
    setShow(!show)
  }
  const hideDropdown = (e) => {
    setShow(false)
  }

  const logoutHandler = () => {
    dispatch(logout())
  }
  if(userLogin)
  return (
    <>
      <Navbar fixed='top' className='nav-wrapper'>
        <Container fluid>
          <Link to='/'>
            <Navbar.Brand>baylorBoard</Navbar.Brand>
            <Navbar.Toggle />
          </Link>

          <Navbar.Collapse className='justify-content-end'>
            

            <div className='icon-container'>
              <div className='icon-container p-2 mr-2 text-light'>
                <Link className='nav-link-style' to='/'>
                  Home
                </Link>
              </div>
            </div>

            <div className='icon-container'>
              <div className='icon-container p-2 mr-2 text-light'>
                <Link className='nav-link-style' to='/tweets'>
                  Tweets
                </Link>
              </div>
            </div>

           {/* <div className='icon-container p-2 mr-2 text-light'>
              <Link className='nav-link-style' to='/events'>
                Events
              </Link>
            </div> */}

            {userInfo && userInfo.role === 'ADMIN' ? (
                <div className='icon-container p-2 mr-2 text-light'>
                  <Link className='nav-link-style' to='/events'>
                    {/* <Event />  */}
                    Events
                  </Link>
                </div>
                ) : (
              ''
            )}

            <div className='icon-container'>
              <div className='icon-container p-2 mr-2 text-light'>
                <Link className='nav-link-style' to='/home'>
                  Slide
                </Link>
              </div>
            </div>

            <div className='icon-container'>
              <div className='icon-container p-2 mr-2 text-light'>
                <Link className='nav-link-style' to='/userevents'>
                  Events List
                </Link>
              </div>
            </div>

            <div className='icon-container'>
              <div className='icon-container p-2 mr-2 text-light'>
                <Link className='nav-link-style' to='/userawards'>
                  Awards List
                </Link>
              </div>
            </div>

            <div className='icon-wrapper'>
            {userInfo && userInfo.role === 'PROFESSOR' ? (
                <div className='icon-container p-2 mr-2 text-light'>
                  <Link className='nav-link-style' to='/awards'>
                    {/* <Event />  */}
                    Awards
                  </Link>
                </div>
                ) : (
              ''
            )}


            {/* <div className='icon-container p-2  text-light'>
              <Link className='nav-link-style' to='/grant'>
                {/* <MonetizationOn />
                Grant
              </Link>
            </div> */}

            {userInfo && userInfo.role === 'ADMIN' ? (
                <div className='icon-container p-2  text-light'>
                <Link className='nav-link-style' to='/adminpage'>
                  {/* <MonetizationOn />  */}
                  Admin Page
                </Link>
              </div>
              ) : (
              ''
            )}

            {userInfo ? (
              <div className='icon-container p-2  text-light'>
                <Link className='nav-link-style' to='/academic'>
                  {/* <LocalLibraryIcon />  */}
                  Academic
                </Link>
              </div>
            ) : (
              <></>
            )}
            {userInfo ? (
              <>
                <NavDropdown
                  title={
                    <AvatarComp
                      role={userInfo.role === 'PROFESSOR' ? 'PROFESSOR' : 'ADMIN'}
                    />
                  }
                  id='nav-dropdown'
                  show={show}
                  onMouseEnter={showDropdown}
                  onMouseLeave={hideDropdown}
                >
                  <NavDropdown.Item eventKey='4.2'>
                    <Link className='link-nostyle' to='/profile'>
                      Profile
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item eventKey='4.3' onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <div className='icon-container p-2 text-light'>
                <Link className='nav-link-style' to='/login'>
                  <LoginIcon /> Sign In
                </Link>
              </div>
            )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default TopBar
