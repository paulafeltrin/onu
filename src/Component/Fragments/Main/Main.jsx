import React from 'react'
import Card from '../../Card/Card'
import * as S from './style'

import { BiBookReader, BiCycling  } from 'react-icons/bi';
import { FaWheelchair, FaSeedling, FaBaby } from 'react-icons/fa';
import { TbRecycle } from 'react-icons/tb';

export default function Main(){
    return(
        <S.Main>
            <Card
                num={1}
                title="Leitura"
                Children={<BiBookReader size={110}/>}
            />
            <Card
                num={2}
                title="Horta comunitária" 
                Children={<FaSeedling size={110} />}
            />
            <Card
                num={3}
                title="Saneamento básico" 
                Children={<TbRecycle size={110}/>}
            />
            <Card
                num={4}
                title="Ciclofaixa" 
                Children={<BiCycling size={110}/>}   
            />
            <Card
                num={5}
                title="Acessibilidade" 
                Children={<FaWheelchair size={110}/>}   
            />
            <Card
                num={6}
                title="Creches" 
                Children={<FaBaby size={110}/>}
            />
        </S.Main>
    )
}

