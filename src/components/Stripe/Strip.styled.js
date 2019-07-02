import styled from 'styled-components/macro';

export const Box = styled.div`
    display: inline-block;
    background: pink;
    width: 100vw;
    height: 200px;
    transition: transform 300ms ease-in-out;
`
export const Trigger = styled.div`
  width: 200px;
  height: 200px;
 
  &:hover ${Box} {
    transform: translate(-50%);
  }
`