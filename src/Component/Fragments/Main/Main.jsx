import React, { useState } from 'react';
import Acessibilidade from '../../../Pages/Melhoria/Acessibilidade'
import Ciclofaixa from '../../../Pages/Melhoria/Ciclofaixa'
import Creche from '../../../Pages/Melhoria/Creche'
import Horta from '../../../Pages/Melhoria/Horta'
import Leitura from '../../../Pages/Melhoria/Leitura'
import Saneamento from '../../../Pages/Melhoria/Saneamento'

import Modal from 'react-modal'
import Card from '../../Card/Card'
import * as S from './style'

import { BiBookReader, BiCycling  } from 'react-icons/bi';
import { FaWheelchair, FaSeedling, FaBaby } from 'react-icons/fa';
import { TbRecycle } from 'react-icons/tb';

export default function Main(){
    const [pgAcessibilidade, setPgAcessibilidade] = useState(false)
    const [pgCiclo, setPgCiclo] = useState(false)
    const [pgCreche, setPgCreche] = useState(false)
    const [pgHorta, setPgHorta] = useState(false)
    const [pgLeitura, setPgLeitura] = useState(false)
    const [pgSaneamento, setPgSaneamento] = useState(false)


    function ChangeAcessibilidade(){
        setPgAcessibilidade(!pgAcessibilidade)
    }

    function ChangeCiclo(){
        setPgCiclo(!pgCiclo)
    }

    function ChangeCreche(){
        setPgCreche(!pgCreche)
    }

    function ChangeHorta(){
        setPgHorta(!pgHorta)
    }

    function ChangeLeitura(){
        setPgLeitura(!pgLeitura)
    }

    function ChangeSaneamento(){
        setPgSaneamento(!pgSaneamento)
    }

    return(
        <S.Main>
            <S.CardOne onClick={()=>{ChangeLeitura()}}>
                <Modal 
                    isOpen={pgLeitura} 
                    onRequestClose={ChangeLeitura}
                    style={{
                        overlay:{
                            backgroundColor:'rgb(197, 25, 45)',
                        },
                        content:{
                            backgroundColor:  'rgba(255, 255, 255, 0.85)',
                            borderRadius: '2%',
                        }
                    }}
                >
                    <Leitura />
                </Modal>
                <Card
                    num={1}
                    title="Leitura"
                    Children={<BiBookReader size={110}/>}
                />
            </S.CardOne>

            <S.CardTwo onClick={()=>{ChangeHorta()}}>
                <Modal 
                    isOpen={pgHorta} 
                    onRequestClose={ChangeHorta}
                    style={{
                        overlay:{
                            backgroundColor: 'rgb(86, 192, 43)',
                        },
                        content:{
                            backgroundColor: 'rgba(255, 255, 255, 0.85)',
                            borderRadius: '2%',
                        }
                    }}
                >
                    <Horta />
                </Modal>
                <Card
                    num={2}
                    title="Horta comunitária" 
                    Children={<FaSeedling size={110} />}
                />
            </S.CardTwo>

            <S.CardThree onClick={()=>{ChangeSaneamento()}}>
                <Modal 
                    isOpen={pgSaneamento} 
                    onRequestClose={ChangeSaneamento}
                    style={{
                        overlay:{
                            backgroundColor:'rgb(10, 151, 217)',
                        },
                        content:{
                            backgroundColor: 'rgba(255, 255, 255, 0.85)',
                            borderRadius: '2%',
                        }
                    }}
                >
                    <Saneamento />
                </Modal>
                <Card
                    num={3}
                    title="Saneamento Básico" 
                    Children={<TbRecycle size={110}/>}
                />
            </S.CardThree>

            <S.CardFour onClick={()=>{ChangeCiclo()}}>
                <Modal 
                    isOpen={pgCiclo} 
                    onRequestClose={ChangeCiclo}
                    style={{
                        overlay:{
                            backgroundColor: 'rgb(221, 166, 58)',
                        },
                        content:{
                            backgroundColor: 'rgba(255, 255, 255, 0.85)',
                            borderRadius: '2%',
                        }
                    }}
                >
                    <Ciclofaixa />
                </Modal>
                <Card
                    num={4}
                    title="Ciclofaixa" 
                    Children={<BiCycling size={110}/>}
                />
            </S.CardFour>

            <S.CardFive onClick={()=>{ChangeAcessibilidade()}}>
                <Modal 
                    isOpen={pgAcessibilidade} 
                    onRequestClose={ChangeAcessibilidade}
                    style={{
                        overlay:{
                            backgroundColor: 'rgb(255, 58, 33)',
                        },
                        content:{
                            backgroundColor: 'rgba(255, 255, 255, 0.85)',
                            borderRadius: '2%',
                        }
                    }}
                >
                    <Acessibilidade />
                </Modal>
                <Card
                    num={5}
                    title="Acessibilidade" 
                    Children={<FaWheelchair size={110}/>}
                />
            </S.CardFive>

            <S.CardSix onClick={()=>{ChangeCreche()}}>
            <Modal 
                    isOpen={pgCreche} 
                    onRequestClose={ChangeCreche}
                    style={{
                        overlay:{
                            backgroundColor: 'rgb(221, 19, 103)',
                        },
                        content:{
                            backgroundColor: 'rgba(255, 255, 255, 0.85)',
                            borderRadius: '2%',
                        }
                    }}
                >
                    <Creche />
                </Modal>
                <Card
                    num={6}
                    title="Creches" 
                    Children={<FaBaby size={110}/>}
                />
            </S.CardSix>
        </S.Main>
    )
}
