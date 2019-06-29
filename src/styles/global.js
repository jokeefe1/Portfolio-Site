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
    background-color: ${({ theme }) => theme.light2};
    height: 100vh;
`
export const Flex = styled.div`
  display: flex;
  align-items: center;
`
export const Container = styled.div`
  width: 94%;
  margin: 0 auto;
`