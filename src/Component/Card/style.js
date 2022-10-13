import styled from 'styled-components'

export const Section= styled.section`
/* width: 15vw;
height: 25vh; */
border: 1px solid red;
`

export const Div = styled.div`
border: 2px solid black;

&:active{
  border: 2px solid blue;
  border-radius: 5%;
  cursor: pointer;
}
`