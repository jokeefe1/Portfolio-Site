import React from 'react'
import { Lang, Link, Nav } from './Navbar.styled'
import Logo from '../Logo/Logo'

export default function Navbar() {
    return (
        <Nav>
            <Link to="/"><Logo /></Link>
            <div>
                <Lang to="/" exact>
                    En.
                </Lang>
                <Lang to="/es">Es.</Lang>
            </div>
        </Nav>
    )
}
