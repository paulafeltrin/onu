import React, { useState } from 'react';
import Modal from 'react-modal'
import Card from '../../Card/Card'
import * as S from './style'

import { BiBookReader, BiCycling  } from 'react-icons/bi';
import { FaWheelchair, FaSeedling, FaBaby } from 'react-icons/fa';
import { TbRecycle } from 'react-icons/tb';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      width: '80%',
      fontSize: '1.3rem',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'white',
      borderRaius: '5%',
      color: 'black',
      textAlign: 'center',
    },
    h3:{
        color: 'red',
    }
  };

export default function Main(){
    const [status, setStatus] = useState(false)

    function handleModal(){
          setStatus(!status)
    }

    return(
        <S.Main>
                <S.CardOne onClick={()=>{handleModal()}}>
                    <Card
                        num={1}
                        title="Leitura"
                        Children={<BiBookReader size={110}/>}
                    />
                    <Modal
                         isOpen={status}onClose={status}
                         style={customStyles}
                         contentLabel="Example Modal"
                    >
                        <h3>Incentivo a leitura</h3>
                        <ul>
                            <li>Incentivar a leitura desde cedo</li>
                            <li>Promover concursos literários no bairro</li>
                            <li>Interpretação textual</li>
                     </ul>
                     <button onClick={()=>{handleModal()}}>X</button>
                    </Modal>
                </S.CardOne>

                <S.CardTwo onClick={()=>{handleModal()}}>
                    <Card
                        num={2}
                        title="Horta comunitária" 
                        Children={<FaSeedling size={110} />}
                    />
                    <Modal
                        isOpen={status}onClose={status}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
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
                </S.CardTwo>

                <S.CardThree onClick={()=>{handleModal()}}>
                    <Card
                        num={3}
                        title="Saneamento básico" 
                        Children={<TbRecycle size={110}/>}
                    />
                    <Modal
                         isOpen={status}onClose={status}
                         style={customStyles}
                         contentLabel="Example Modal"
                    >
                        <h3>Saneamento básico</h3>
                        <ul>
                            <li>Objetivo de todas as casas possuir rede canalizada de esgoto</li>
                            <li>Diminuir a poluição dos rios e córregos</li>
                     </ul>
                     <button onClick={()=>{handleModal()}}>X</button>
                    </Modal>
                </S.CardThree>

                <S.CardFour onClick={()=>{handleModal()}}>
                    <Card
                        num={4}
                        title="Ciclofaixa" 
                        Children={<BiCycling size={110}/>}
                    />
                    <Modal
                         isOpen={status}onClose={status}
                         style={customStyles}
                         contentLabel="Example Modal"
                    >
                        <h3>Ciclofaixa</h3>
                        <ul>
                            <li>Construção de ciclofaixa na rodovia PR 180, visto que é extensivamente utilizada para práticas esportivas</li>
                     </ul>
                     <button onClick={()=>{handleModal()}}>X</button>
                    </Modal>
                </S.CardFour>

                <S.CardFive onClick={()=>{handleModal()}}>
                    <Card
                        num={5}
                        title="Acessibilidade" 
                        Children={<FaWheelchair size={110}/>}
                    />
                    <Modal
                         isOpen={status}onClose={status}
                         style={customStyles}
                         contentLabel="Example Modal"
                    >
                        <h3>Acessibilidade</h3>
                        <ul>
                            <li>Construção de rampas de acesso</li>
                     </ul>
                     <button onClick={()=>{handleModal()}}>X</button>
                    </Modal>
                </S.CardFive>

                <S.CardSix onClick={()=>{handleModal()}}>
                    <Card
                        num={6}
                        title="Creches" 
                        Children={<FaBaby size={110}/>}
                    />
                    <Modal
                         isOpen={status}onClose={status}
                         style={customStyles}
                         contentLabel="Example Modal"
                    >
                        <h3>Creches</h3>
                        <ul>
                            <li>Incentivar a leitura desde cedo</li>
                            <li>Incentivar a leitura desde cedo</li>
                            <li>Incentivar a leitura desde cedo</li>
                            <li>Incentivar a leitura desde cedo</li>
                            <li>Incentivar a leitura desde cedo</li>
                     </ul>
                     <button onClick={()=>{handleModal()}}>X</button>
                    </Modal>
                </S.CardSix>
        </S.Main>
    )
}
