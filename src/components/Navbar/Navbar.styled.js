import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../styles/colors'

export const Img = styled.img`
    height: 30px;
`

export const Nav = styled.div`
    background-color: ${colors.primary1};
`

export const Link = styled(NavLink)`
    padding: 0 1rem;
    text-decoration: none;
    color: ${colors.light1};
     &.active {
    color: ${colors.accent2};
  }
`

