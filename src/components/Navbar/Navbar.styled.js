import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'
import { Moon } from 'styled-icons/feather/Moon'
import { Sun } from 'styled-icons/feather/Sun'

export const Nav = styled.div`
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    height: 40px;
    padding-top: 1rem;
    background-color: ${({ theme }) => theme.light1};
`

export const Link = styled(NavLink)`
    text-decoration: none;
    color: ${({ theme }) => theme.dark1};
`

export const SunIcon = styled(Sun)`
    padding: 0.2rem;
    margin-right: 2rem;
    cursor: pointer;
    color: ${({ theme }) => theme.dark1};
`

export const MoonIcon = styled(Moon)`
    padding: 0.2rem;
    margin-right: 2rem;
    cursor: pointer;
    color: ${({ theme }) => theme.dark1};
`
