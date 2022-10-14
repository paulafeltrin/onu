import React from 'react'
import {GlobalStyle} from "../src/Component/Global/global"
import Header from './Component/Fragments/Header/Header'
import Main from './Component/Fragments/Main/Main'
import Footer from './Component/Fragments/Footer/Footer'

export default function App(){
  return(
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer/>
    </>
  )
}