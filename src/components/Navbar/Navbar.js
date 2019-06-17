import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <div>Logo</div>
            <div>
                <ul>
                    <NavLink to='/projects'>Projects</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                </ul>
            </div>
        </div>
    )
}
