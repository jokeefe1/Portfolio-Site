import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Nav = styled.div`
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    height: 40px;
    width: 100%;
    padding-top: 1rem;
    background-color: ${({ theme }) => theme.light1};
    z-index: 2;
`

export const Link = styled(NavLink)`
    text-decoration: none;
    color: ${({ theme }) => theme.dark1};
`
export const Lang = styled(NavLink)`
    font-size: 11px;
    padding: 0.2rem;
    text-decoration: none;
    color: ${({ theme }) => theme.light3};
    &.active {
        color: ${({ theme }) => theme.dark1};
    }
`
