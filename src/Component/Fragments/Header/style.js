import styled from "styled-components";

export const Header = styled.header`
padding: 3.4vh 5vw;
max-width: 1080px;
margin: 0 auto;
border: 1px solid red;
`
export const H1 = styled.h1`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: 2.3rem;
text-align: center;
padding: 5vh 0;
@media screen and (max-width: 500px){
    font-size: 1.7rem; 
}
`
export const P = styled.p`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: 1rem;
text-align: justify;
@media screen and (max-width: 500px){
    font-size: .7rem; 
}
`