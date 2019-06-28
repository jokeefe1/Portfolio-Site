import React from 'react'
import { Lang, Link, Nav } from './Navbar.styled'

export default function Navbar() {
    return (
        <Nav>
            <Link to="/">John O'Keefe</Link>
            <div>
                <Lang to="/" exact>
                    En.
                </Lang>
                <Lang to="/es">Es.</Lang>
            </div>
        </Nav>
    )
}
