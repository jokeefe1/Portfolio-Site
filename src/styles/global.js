import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
 html {
   box-sizing: border-box;
}

 *,
 *::before,
 *::after {
   box-sizing: inherit;
}

`

export const Center = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Background = styled.div`
    background-color: ${({ theme }) => theme.light1};
    height: 100vh;
`
