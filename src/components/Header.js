import React from 'react'
import { NavLink } from 'react-router-dom'

import '../styles/header.css'

const Header = ({ isNav }) => {
    return (
        <header>
            <NavLink to='/'>
                <h3>MiniApp</h3>
            </NavLink>
            {isNav && (
                <ul>
                    <li>
                        <NavLink to='/login'>Login</NavLink>
                    </li>
                    <li>
                        <NavLink to='/register'>Register</NavLink>
                    </li>
                </ul>
            )}
        </header>
    )
}

export default Header
