import styled, { createGlobalStyle } from 'styled-components/macro'

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
    width: 100%;
`
export const Background = styled.div`
    background-color: ${({ theme }) => theme.light2};
    height: 100vh;
`
export const Flex = styled.div`
  display: flex;
`
export const Container = styled.div`
  width:99%;
  margin: 0 auto;
`