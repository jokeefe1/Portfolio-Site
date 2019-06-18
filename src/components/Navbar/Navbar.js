import React from 'react'
import { Center } from '../../styles/global'
import Logo from '../Logo/Logo'
import { Link, Nav } from './Navbar.styled'

export default function Navbar(props) {
    return (
        <Nav>
            <Center>
                <div>
                    <Link to="/">
                        <Logo />
                    </Link>
                </div>
                <div>
                    <button onClick={props.themeChange}>Change Theme</button>
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
