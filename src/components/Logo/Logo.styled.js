import styled from 'styled-components'

export const Icon = styled.svg`
    flex: none;
    transition: fill 0.25s;
    width: 20px;
    height: 20px;
    fill: ${({ theme }) => theme.dark1};
`
