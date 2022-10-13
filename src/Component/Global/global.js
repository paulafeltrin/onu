import {createGlobalStyle} from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
`
export const Body = styled.body`
display: flex;
justify-content: space-around;
max-width: 1080px;
margin: 0 auto;
`