import React, { useState } from 'react'
import './navbar.css'
import AASFLogo from '../../assets/svgIcons/aasflogo'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
  }

  const Close = () => {
    setClick(false)
  }

  return (
    <div>
      <div
        className={click ? 'navbar-main-container' : ''}
        onClick={() => Close()}
      />
      <nav className="navbar flex-centre" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container flex-centre">
          <div className="nav-logo">
            <NavLink exact to="/">
              <AASFLogo />
            </NavLink>
          </div>
          <ul className={click ? 'nav-menu navbar-active' : 'nav-menu'}>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/"
                className={({ isActive }) =>
                  isActive ? 'nav-links navbar-active' : 'nav-links'
                }
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/abhishar"
                className={({ isActive }) =>
                  isActive ? 'nav-links navbar-active' : 'nav-links'
                }
                onClick={click ? handleClick : null}
              >
                Abhishar
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/blogs"
                className={({ isActive }) =>
                  isActive ? 'nav-links navbar-active' : 'nav-links'
                }
                onClick={click ? handleClick : null}
              >
                Blogs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/events"
                className={({ isActive }) =>
                  isActive ? 'nav-links navbar-active' : 'nav-links'
                }
                onClick={click ? handleClick : null}
              >
                Events
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/team"
                className={({ isActive }) =>
                  isActive ? 'nav-links navbar-active' : 'nav-links'
                }
                onClick={click ? handleClick : null}
              >
                Team
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/contact"
                className={({ isActive }) =>
                  isActive ? 'nav-links navbar-active' : 'nav-links'
                }
                onClick={click ? handleClick : null}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? 'fa fa-times' : 'fa fa-bars'}></i>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
