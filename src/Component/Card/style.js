import styled from 'styled-components'

export const Div = styled.div`
border: 2px solid black;

&:hover{
  cursor: pointer;
}

&:active{
  border: 2px solid blue;
  border-radius: 5%;
}
`
export const Head = styled.div`
display: flex;
`
export const Num = styled.p`
font-size: 2.5rem;
font-weight: bolder;
padding: .7vh .7vw;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const Topic =styled.h2`
font-size: 1.7rem;
font-weight: bold;
width: 165px;
display: flex;
padding: 0 2vw;
justify-content: center;
align-items: center;
`
export const Img = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 1.5vh 1.3vw;
`