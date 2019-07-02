import styled from 'styled-components/macro'
import { Github } from 'styled-icons/boxicons-logos/Github'
import { Linkedin } from 'styled-icons/boxicons-logos/Linkedin'

export const Social = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 1.5%;
    border: 0;
`

export const LinkedIn = styled(Linkedin)`
    color: ${({ theme }) => theme.dark1};

    &:hover {
        cursor: pointer;
        transform: scale(1.2);
    }
`

export const GitHub = styled(Github)`
    color: ${({ theme }) => theme.dark1};

    &:hover {
        cursor: pointer;
        transform: scale(1.2);
    }
`