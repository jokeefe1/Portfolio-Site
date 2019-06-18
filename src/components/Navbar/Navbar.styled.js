import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import colors from '../../styles/colors'

export const Link = styled(NavLink)`
    padding: 0 1rem;
    text-decoration: none;
    color: ${colors.cream1}
`

export const Nav = styled.div`
    background-color: ${colors.blue1};
`