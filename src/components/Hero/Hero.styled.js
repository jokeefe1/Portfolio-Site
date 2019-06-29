import styled from 'styled-components'

export const HeroDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const ColorDiv = styled.div`
    width: 50%;
    height: 768px;
    background-color: ${({ theme }) => theme.primary1}; 
`

export const HeroText = styled.div`
    font-size: 10rem;
    transform: translateX(-155px);
    font-weight: 900;
    z-index: 1;
    font-family: ${({ theme }) => theme.font1};
    color: ${({ theme }) => theme.dark1};
    

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
