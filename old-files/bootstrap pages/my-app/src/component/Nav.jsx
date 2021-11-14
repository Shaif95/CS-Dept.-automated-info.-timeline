import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <nav class='navbar navbar-expand-sm navbar-dark scrolling-navbar'>
        <button
          class='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>

        <div class='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul class='navbar-nav'>
            <li class='nav-item'>
              <Link className='nav-link' to='/'>
                Home
              </Link>
            </li>

            <li class='nav-item'>
              <Link className='nav-link' to='/event'>
                Events
              </Link>
            </li>

            <li class='nav-item'>
              <Link className='nav-link' to='/grant'>
                Events
              </Link>
            </li>

            <li class='nav-item dropdown'>
              <a
                class='nav-link dropdown-toggle'
                href='#'
                id='navbardrop'
                data-toggle='dropdown'
              >
                Login
              </a>
              <div class='dropdown-menu'>
                <a class='dropdown-item' href='#'>
                  Admin Login
                </a>
                <a class='dropdown-item' href='#'>
                  Faculty Login
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav
