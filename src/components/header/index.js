import React from 'react'
import { Link } from 'react-router-dom'
import useCheckWidth from '../../hooks/useCheckWidth'
import hamburger from '../../assets/Hamburger_icon.png'
import './assets/header.css'

const Header = () => {
    const windowWidth = useCheckWidth()
    console.log(windowWidth)

    return (<header className='navBar'>
        <Link to='/' className='title'>
            <h1>In Home Dentures</h1>
        </Link>

        {/* TABLET STYLES */}

        {windowWidth >= 900 
        ?
            <>
                <nav className='navigation'>
                    <Link className='navigation__link' to='/about'>About</Link>
                    <Link className='navigation__link' to='/services'>Services</Link>
                    <Link className='navigation__link' to='/new-patients'>New Patients</Link>
                    <Link className='navigation__link' to='/contact'>Contact</Link>
                </nav>
                <button className='button--request-appointment'>Request Appointment</button>
            </>
        :
            <></>
        }


        {/* TABLET STYLES */}

        {windowWidth < 900 && windowWidth >= 600
        ?
            <>
                <button className='button--request-appointment'>Request Appt.</button>
                <div className='hamburgerMenu'>
                    <img src={hamburger} style={{ width: '40px', color: 'white'}} />
                </div>
            </>
        :
            <></>
        }

        {/* MOBILE STYLES */}

        {windowWidth < 600
        ?
            <>
                <img src={hamburger} style={{ width: '40px', color: 'white'}} />
            </>
        :
            <></>
        }
    </header>)
}

export default Header
