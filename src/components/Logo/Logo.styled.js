import styled from 'styled-components'

export const Icon = styled.svg`
    flex: none;
    transition: fill 0.25s;
    width: 50px;
    height: 50px;
    fill: ${({ theme }) => theme.dark1};
`
