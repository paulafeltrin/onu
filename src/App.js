import React, { Children } from 'react'
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
      <S.Body>
        <Card
          num={1}
          title="Leitura"
          Children={<BiBookReader />}
        />
        <Card
          num={2}
          title="Horta comunitária" 
          Children={<FaSeedling />}
        />
        <Card
          num={3}
          title="Saneamento básico" 
          Children={<TbRecycle/>}
        />
        <Card
          num={4}
          title="Ciclofaixa" 
          Children={<BiCycling/>}   
        />
        <Card
          num={5}
          title="Acessibilidade" 
          Children={<FaWheelchair/>}   
        />
        <Card
          num={6}
          title="Creches" 
          Children={<FaBaby />}
        />
      </S.Body>
      <Footer/>
    </>
  )
}