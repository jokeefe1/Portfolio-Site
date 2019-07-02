import styled, { keyframes } from 'styled-components/macro'
import { LongArrowAltDown } from 'styled-icons/fa-solid/LongArrowAltDown'


const upDown = keyframes`
    0% { transform: translateY(10px)}
    100% { transform: translateY(-10px)}
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
