import React from 'react'
import {GlobalStyle} from "../src/Component/Global/global"
import Rotas from "../src/services/routes"

export default function App(){
  return(
    <>
      <GlobalStyle />
      <Rotas />
    </>
  )
}