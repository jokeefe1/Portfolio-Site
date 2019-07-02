import styled from 'styled-components/macro';

export const Icon = styled.svg`
    flex: none;
    transition: fill 0.25s;
    width: 20px;
    height: 20px;
    margin-left: 1.5rem;
    fill: ${({ theme }) => theme.dark1};
`
