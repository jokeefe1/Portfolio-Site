import styled, { keyframes } from 'styled-components'

const morph = keyframes`
0% { width: 100% }
100% { width: 50% }
`

const fadeIn = keyframes`
0% { opacity: 0 }
100% { opacity: 1 }
`

export const ColorDivPrimary = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.primary1};
    animation: ${morph} 1s linear forwards;

    & > * {
        opacity: 0;
    }
`

export const ColorDivLight2 = styled.div`
    width: 100vw;
    height: 100vh;
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
