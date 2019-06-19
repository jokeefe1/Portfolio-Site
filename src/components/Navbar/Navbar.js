import React from 'react';
import { Center, Flex } from '../../styles/global';
import Logo from '../Logo/Logo';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import { Link, Nav, Sun, Moon } from './Navbar.styled';

export default function Navbar(props) {
    return (
        <Nav>
            <Center>
                <Flex>
                    <Link to="/">
                        <Logo />
                    </Link>
                    <div>
                        <Sun />
                        <ToggleSwitch />
                        <Moon />
                    </div>
                </Flex>
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
