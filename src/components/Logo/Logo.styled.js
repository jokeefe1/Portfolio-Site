import styled from 'styled-components'

export const Icon = styled.svg`
    flex: none;
    transition: fill 0.25s;
    width: 28px;
    height: 28px;
    fill: ${({ theme }) => theme.accent1};
`
