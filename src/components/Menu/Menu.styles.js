import styled, { keyframes } from 'styled-components/macro'
import { MenuAltRight } from 'styled-icons/boxicons-regular/MenuAltRight'


const pushRight = keyframes`
    0% { margin-right: 1.5% }
    100% {margin-right: 5% }
`

export const MenuDiv = styled.div`
    p {
        font-size: 15rem;
        color: ${({theme}) => theme.dark1};
        z-index: 10;
    }
`

export const MenuIcon = styled(MenuAltRight)`
    margin-right: 1.5%;
    border: 0;  
    color: ${({ theme }) => theme.dark1};

    &:hover {
        cursor: pointer;
        transform: scale(1.2);
        margin-right: 5%;
        animation: ${pushRight} 300ms ease-in-out;
    }
`