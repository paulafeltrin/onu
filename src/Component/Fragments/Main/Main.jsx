import React, { useState } from 'react';
import Modal from 'react-modal';
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
                <S.CardOne onClick={()=>{handleModal()}}>
                    <Card
                        num={1}
                        title="Leitura"
                        Children={<BiBookReader size={110}/>}
                    />
                    <Modal 
                        isOpen={status}
                    >
                        <ul>
                            <li>Melhorias Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste unde itaque tenetur id minus doloribus nesciunt recusandae veritatis, consequatur illum voluptatem quasi assumenda asperiores. Hic consequuntur quasi eligendi consequatur sed?</li>
                        </ul>
                    <button onClick={()=>{handleModal()}}>CLOSE</button>
                    </Modal>
                </S.CardOne>

                <S.CardTwo onClick={()=>{handleModal()}}>
                    <Card
                        num={2}
                        title="Horta comunitária" 
                        Children={<FaSeedling size={110} />}
                    />
                    <Modal 
                        isOpen={status}
                    >
                        <ul>
                            <li>Melhorias Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste unde itaque tenetur id minus doloribus nesciunt recusandae veritatis, consequatur illum voluptatem quasi assumenda asperiores. Hic consequuntur quasi eligendi consequatur sed?</li>
                        </ul>
                    <button onClick={()=>{handleModal()}}>CLOSE</button>
                    </Modal>
                </S.CardTwo>

                <S.CardThree onClick={()=>{handleModal()}}>
                    <Card
                        num={3}
                        title="Saneamento básico" 
                        Children={<TbRecycle size={110}/>}
                    />
                    <Modal 
                        isOpen={status}
                    >
                        <ul>
                            <li>Melhorias Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste unde itaque tenetur id minus doloribus nesciunt recusandae veritatis, consequatur illum voluptatem quasi assumenda asperiores. Hic consequuntur quasi eligendi consequatur sed?</li>
                        </ul>
                    <button onClick={()=>{handleModal()}}>CLOSE</button>
                    </Modal>
                </S.CardThree>

                <S.CardFour onClick={()=>{handleModal()}}>
                    <Card
                        num={4}
                        title="Ciclofaixa" 
                        Children={<BiCycling size={110}/>}
                    />
                    <Modal 
                        isOpen={status}
                    >
                        <ul>
                            <li>Melhorias Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste unde itaque tenetur id minus doloribus nesciunt recusandae veritatis, consequatur illum voluptatem quasi assumenda asperiores. Hic consequuntur quasi eligendi consequatur sed?</li>
                        </ul>
                    <button onClick={()=>{handleModal()}}>CLOSE</button>
                    </Modal>
                </S.CardFour>

                <S.CardFive onClick={()=>{handleModal()}}>
                    <Card
                        num={5}
                        title="Acessibilidade" 
                        Children={<FaWheelchair size={110}/>}
                    />
                    <Modal 
                        isOpen={status}
                    >
                        <ul>
                            <li>Melhorias Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste unde itaque tenetur id minus doloribus nesciunt recusandae veritatis, consequatur illum voluptatem quasi assumenda asperiores. Hic consequuntur quasi eligendi consequatur sed?</li>
                        </ul>
                    <button onClick={()=>{handleModal()}}>CLOSE</button>
                    </Modal>
                </S.CardFive>

                <S.CardSix onClick={()=>{handleModal()}}>
                    <Card
                        num={6}
                        title="Creches" 
                        Children={<FaBaby size={110}/>}
                    />
                    <Modal 
                        isOpen={status}
                    >
                        <ul>
                            <li>Melhorias Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste unde itaque tenetur id minus doloribus nesciunt recusandae veritatis, consequatur illum voluptatem quasi assumenda asperiores. Hic consequuntur quasi eligendi consequatur sed?</li>
                        </ul>
                    <button onClick={()=>{handleModal()}}>CLOSE</button>
                    </Modal>
                </S.CardSix>
        </S.Main>
    )
}

