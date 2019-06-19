import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Sun as baseSun } from 'styled-icons/feather/Sun'
import { Moon as baseMoon } from 'styled-icons/feather/Moon';

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
        color: ${({ theme }) => theme.accent1};
    }
`
export const Sun = styled(baseSun)`
    height: 30px;
    color: ${({theme}) => theme.accent1};
`

export const Moon = styled(baseMoon)`
    height: 30px;
    color: ${({theme}) => theme.accent1};
`
