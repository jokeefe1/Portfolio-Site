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
    font-size: 160px;
    transform: translateX(-170px);
    z-index: 1;
    color: ${({ theme }) => theme.dark1};

    span {
        font-size: 300px;
        color: ${({theme}) => theme.primary1};
        line-height:0;
    }
`
