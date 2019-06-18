import React from 'react'
import Logo from '../../Logo/Logo'
import { Center } from '../../styles/global'
import { Link, Nav } from './Navbar.styled'

export default function Navbar() {
    return (
        <Nav>
            <Center>
                <div>
                    <Link to="/">
                        <Logo />
                    </Link>
                </div>
                <div>
                    <ul>
                        <Link to="/projects">Projects</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                    </ul>
                </div>
            </Center>
        </Nav>
    )
}
