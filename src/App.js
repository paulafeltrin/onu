import React from 'react'
import {GlobalStyle} from "../src/Component/Global/global"
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import Card from './Component/Card/Card'
import { BiBookReader, BiCycling  } from "react-icons/bi";
import { FaWheelchair, FaSeedling, FaBaby } from "react-icons/fa";
import { TbRecycle } from "react-icons/tb";
import * as S from './Component/Global/global'

export default function App(){
  return(
    <>
      <GlobalStyle />
      <Header />
      <S.Main>
        <Card
          num={1}
          title="Leitura"
          Children={<BiBookReader size={120}/>}
        />
        <Card
          num={2}
          title="Horta comunitária" 
          Children={<FaSeedling size={120} />}
        />
        <Card
          num={3}
          title="Saneamento básico" 
          Children={<TbRecycle size={120}/>}
        />
        <Card
          num={4}
          title="Ciclofaixa" 
          Children={<BiCycling size={120}/>}   
        />
        <Card
          num={5}
          title="Acessibilidade" 
          Children={<FaWheelchair size={120}/>}   
        />
        <Card
          num={6}
          title="Creches" 
          Children={<FaBaby size={120}/>}
        />
      </S.Main>
      <Footer/>
    </>
  )
}