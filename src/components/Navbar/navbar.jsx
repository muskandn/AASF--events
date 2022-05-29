import React, { Component, useState } from 'react'
import './navbar.css'
import AASFLogo from '../../assets/svgIcons/aasflogo'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const handleOpenNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  const handleCloseNav = () => {
    setIsNavOpen(false)
  }

  const isActiveClass = (isActive) => {
    const activeClassName = isActive ? 'nav-links navbar-active' : 'nav-links'
    return activeClassName
  }

  return (
    <div>
      <div
        className={isNavOpen ? 'navbar-main-container' : ''}
        onClick={() => handleCloseNav()}
      />
      <nav className="navbar flex-centre" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container flex-centre">
          <div className="nav-logo">
            <NavLink exact to="/">
              <AASFLogo />
            </NavLink>
          </div>
          <ul className={isNavOpen ? 'nav-menu navbar-active' : 'nav-menu'}>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/"
                className={({ isActive }) => isActiveClass(isActive)}
                onClick={isNavOpen ? handleOpenNav : null}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/abhishar"
                className={({ isActive }) => isActiveClass(isActive)}
                onClick={isNavOpen ? handleOpenNav : null}
              >
                Abhishar
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/blogs"
                className={({ isActive }) => isActiveClass(isActive)}
                onClick={isNavOpen ? handleOpenNav : null}
              >
                Blogs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/events"
                className={({ isActive }) => isActiveClass(isActive)}
                onClick={isNavOpen ? handleOpenNav : null}
              >
                Events
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/team"
                className={({ isActive }) => isActiveClass(isActive)}
                onClick={isNavOpen ? handleOpenNav : null}
              >
                Team
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/contact"
                className={({ isActive }) => isActiveClass(isActive)}
                onClick={isNavOpen ? handleOpenNav : null}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleOpenNav}>
            <i className={isNavOpen ? 'fa fa-times' : 'fa fa-bars'}></i>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
