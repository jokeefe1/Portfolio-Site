import styled, { keyframes } from 'styled-components/macro'
import { Github } from 'styled-icons/boxicons-logos/Github'
import { Linkedin } from 'styled-icons/boxicons-logos/Linkedin'
import { LongArrowAltDown } from 'styled-icons/fa-solid/LongArrowAltDown'

const morph = keyframes`
    0% { width: 100% }
    100% { width: 50% }
`

const fadeIn = keyframes`
    0% { opacity: 0 }
    100% { opacity: 1 }
`

const upDown = keyframes`
    0% { transform: translateY(10px)}
    100% { transform: translateY(-10px)}
`

export const ColorDivPrimary = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 768px;
    background-color: ${({ theme }) => theme.primary1};
    animation: ${morph} 1s linear forwards;

    & > * {
        opacity: 0;
    }
`

export const ColorDivLight2 = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 768px;
    background-color: ${({ theme }) => theme.light2};
`

export const HeroText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    font-size: 10rem;
    font-weight: 900;
    transform: translateX(70%);
    font-family: ${({ theme }) => theme.font1};
    color: ${({ theme }) => theme.dark1};
    animation-name: ${fadeIn};
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-delay: 2s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    #dot {
        font-size: 300px;
        color: ${({ theme }) => theme.primary1};
        line-height: 0;
    }

    #star {
        font-size: 11rem;
        vertical-align: sub;
    }
`

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

export const Arrow = styled(LongArrowAltDown)`
    color: ${({ theme }) => theme.dark1};
    animation: ${upDown} 1s linear 2s infinite alternate;
`

export const ArrowDiv = styled.div`
    align-self: flex-end;
    transform: translateY(-2rem);

    p {
        writing-mode: vertical-rl;
        transform: rotate(180deg);
        font-size: 0.8rem;
        margin: 0;
        padding: 1rem 0;
    }
`
