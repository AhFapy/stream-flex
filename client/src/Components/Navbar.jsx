import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div className='navbar-left'>
            <img className='nav-logo' src='../../public/images/streamflex.png' alt="" />
            <p className='nav-title'>Stream Flex</p>
        </div>
        <div className='navbar-right'>
            <NavLink to="/" className="nav-link-access">
                <button className='access-btn'>Access</button>
            </NavLink>
        </div>

    </>
  )
}

export default Navbar
