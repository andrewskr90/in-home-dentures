import React from 'react'
import { Link } from 'react-router-dom'
import hamburger from '../../assets/Hamburger_icon.png'
import './assets/header.css'

const Header = () => {
    return (<header className='navBar'>
        <Link to='/' className='title'>
            <h1>In Home Dentures</h1>
        </Link>
        <nav className='navigation'>
            <Link className='navigation__link' to='/about'>About</Link>
            <Link className='navigation__link' to='/services'>Services</Link>
            <Link className='navigation__link' to='/new-patients'>New Patients</Link>
            <Link className='navigation__link' to='/contact'>Contact</Link>
        </nav>
        <button className='button--request-appointment'>Request Appointment</button>

        {/* hidden on desktop */}
        <div className='hamburgerMenu'>
            <img src={hamburger} />
        </div>
    </header>)
}

export default Header
