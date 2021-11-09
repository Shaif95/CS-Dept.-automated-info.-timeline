import './SideBar.scss'
import Nav from 'react-bootstrap/Nav'
import {  MonetizationOn, Dashboard, Event } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <>
      <div className='side-bar'>
        <Nav defaultActiveKey='/home' className='flex-column' variant='white'>
          <Nav.Link as={Link} to='/'>
            <Dashboard className='mr-2' />
            Dashboard
          </Nav.Link>
          <Nav.Link as={Link} to='/event'>
            <Event className='mr-2' />
            Event
          </Nav.Link>
          <Nav.Link as={Link} to='/grant'>
            < MonetizationOn className='mr-2' />
            Grant
          </Nav.Link>
        </Nav>
      </div>
    </>
  )
}

export default SideBar
