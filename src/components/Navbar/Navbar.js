import React from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import Logo from '../Logo/Logo'
import { Link, MoonIcon, Nav, SunIcon } from './Navbar.styled'

export default function Navbar() {
    const value = React.useContext(ThemeContext)
    return (
        <Nav>
            <Link to="/">
                <Logo />
            </Link>
            <div onClick={() => value.changeTheme()}>
                {value.isToggled ? (
                    <MoonIcon size="1.5rem" />
                ) : (
                    <SunIcon size="1.5rem" />
                )}
            </div>
        </Nav>
    )
}
