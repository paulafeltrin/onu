import React from 'react'
import Card from '../../Card/Card'
import * as S from './style'
// import Carousel from 'nuka-carousel/lib/carousel';

import { BiBookReader, BiCycling  } from 'react-icons/bi';
import { FaWheelchair, FaSeedling, FaBaby } from 'react-icons/fa';
import { TbRecycle } from 'react-icons/tb';

export default function Main(){
    return(
        <S.Main>
            {/* <Carousel
                scrollMode="page"
                disableEdgeSwiping={true}
                slidesToShow={3}
                slidesToScroll={3}
                autoplay={true}
                renderBottomCenterControls={false}
                defaultControlsConfig={{
                    nextButtonText: '<',
                    prevButtonText: '>',
                    
                }}
            > */}
                <S.CardOne>
                    <Card
                        num={1}
                        title="Leitura"
                        Children={<BiBookReader size={110}/>}
                    />
                </S.CardOne>
                <S.CardTwo>
                    <Card
                        num={2}
                        title="Horta comunitária" 
                        Children={<FaSeedling size={110} />}
                    />
                </S.CardTwo>
                <S.CardThree>
                    <Card
                        num={3}
                        title="Saneamento básico" 
                        Children={<TbRecycle size={110}/>}
                    />
                </S.CardThree>
                <S.CardFour>
                    <Card
                        num={4}
                        title="Ciclofaixa" 
                        Children={<BiCycling size={110}/>}
                    />
                </S.CardFour>
                <S.CardFive>
                    <Card
                        num={5}
                        title="Acessibilidade" 
                        Children={<FaWheelchair size={110}/>}
                    />
                </S.CardFive>
                <S.CardSix>
                    <Card
                        num={6}
                        title="Creches" 
                        Children={<FaBaby size={110}/>}
                    />
                </S.CardSix>

            {/* </Carousel> */}
        </S.Main>
    )
}

