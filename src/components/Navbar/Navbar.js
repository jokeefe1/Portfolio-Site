import React from 'react'
import { Center } from '../../styles/global'
import { Link, Nav, Img } from './Navbar.styled'
import logo from '../../images/logo.png'

export default function Navbar() {
    return (
        <Nav>
        <Center>
            <div>
                <Link to='/'>
                    <Img src={logo} alt='logo' />
                </Link>
            </div>
            <div>
                <ul>
                    <Link to='/projects'>Projects</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
                </ul>
            </div>
        </Center>
        </Nav>
    )
}
