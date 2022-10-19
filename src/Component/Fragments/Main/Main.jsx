import React, { useState } from 'react';
import {Modal} from '../Modal/Modal'
import Card from '../../Card/Card'
import * as S from './style'

import { BiBookReader, BiCycling  } from 'react-icons/bi';
import { FaWheelchair, FaSeedling, FaBaby } from 'react-icons/fa';
import { TbRecycle } from 'react-icons/tb';

export default function Main(){
    const [status, setStatus] = useState(false)

    function handleModal(){
          setStatus(!status)
    }

    return(
        <S.Main>
            <S.CardOne onClick={()=>{setStatus(true)}}>
                {status ? (
                    <Modal onClose={() => setStatus(false)}>
                        <h3>Incentivo a leitura</h3>
                        <ul>
                            <li>Incentivar a leitura desde cedo</li>
                            <li>Promover concursos literários no bairro</li>
                            <li>Interpretação textual</li>
                        </ul>
                    </Modal>
                    )
                    : null }
                <Card
                    num={1}
                    title="Leitura"
                    Children={<BiBookReader size={110}/>}
                />
            </S.CardOne>

            <S.CardTwo onClick={()=>{setStatus(true)}}>
                {status ? (
                    <Modal onClose={() => setStatus(false)}>
                        <h3>Horta comunitária</h3>
                        <ul>
                            <li>Objetivo de construir e manter uma horta no bairro</li>
                            <li>Diminuir custos com alimentação</li>
                            <li>Incentivar a alimentação saudável</li>
                            <li>Doação do terreno pela prefeitura</li>
                            <li>Manutenção da horta pela comunidade</li>
                        </ul>
                        <button onClick={()=>{handleModal()}}>X</button>
                    </Modal>
                )
                : null }
                <Card
                    num={2}
                    title="Horta comunitária" 
                    Children={<FaSeedling size={110} />}
                />
            </S.CardTwo>

            <S.CardThree onClick={()=>{setStatus(true)}}>
                {status ? (
                    <Modal onClose={() => setStatus(false)}>
                        <h3>Saneamento Básico</h3>
                        <ul>
                            <li>Objetivo de todas as casas possuir rede canalizada de esgoto</li>
                            <li>Diminuir a poluição dos rios e córregos</li>
                        </ul>
                    </Modal>
                )
                : null }
                <Card
                    num={3}
                    title="Saneamento Básico" 
                    Children={<TbRecycle size={110}/>}
                />
            </S.CardThree>

            <S.CardFour onClick={()=>{setStatus(true)}}>
                {status ? (
                    <Modal onClose={() => setStatus(false)}>
                        <h3>Ciclofaixa</h3>
                        <ul>
                            <li>Construção de ciclofaixa na rodovia PR 180, visto que é extensivamente utilizada para práticas esportivas</li>
                        </ul>
                    </Modal>
                )
                : null }
                <Card
                    num={4}
                    title="Ciclofaixa" 
                    Children={<BiCycling size={110}/>}
                />
            </S.CardFour>

            <S.CardFive onClick={()=>{setStatus(true)}}>
                {status ? (
                    <Modal onClose={() => setStatus(false)}>
                        <h3>Acessibilidade</h3>
                        <ul>
                            <li>Construção de rampas de acesso</li>
                        </ul>
                    </Modal>
                )
                : null }
                <Card
                    num={5}
                    title="Acessibilidade" 
                    Children={<FaWheelchair size={110}/>}
                />
            </S.CardFive>

            <S.CardSix onClick={()=>{setStatus(true)}}>
                {status ? (
                    <Modal onClose={() => setStatus(false)}>
                        <p>Creches</p>
                        <p>Primeiro contado das crianças na sociedade.</p>
                    </Modal>
                )
                : null }
                <Card
                    num={6}
                    title="Creches" 
                    Children={<FaBaby size={110}/>}
                />
            </S.CardSix>
        </S.Main>
    )
}
