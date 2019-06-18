import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Img = styled.img`
    height: 30px;
`

export const Nav = styled.div`
    background-color: ${({ theme }) => theme.primary1};
`

export const Link = styled(NavLink)`
    padding: 0 1rem;
    text-decoration: none;
    color: ${({ theme }) => theme.light1};
    &.active {
        color: ${({ theme }) => theme.accent2};
    }
`
