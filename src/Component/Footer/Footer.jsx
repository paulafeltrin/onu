import React from "react";
import * as S from "./style"
import { AiFillLinkedin } from "react-icons/ai";
import { GoMarkGithub } from "react-icons/go";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Footer(){
return(
        <S.Footer>
            <S.Ul>
                <S.Li>
                    <S.A href="https://www.linkedin.com/in/paulafeltrin/"target="_blank"rel="noreferrer"><AiFillLinkedin title='LinkedIn' size={50}/></S.A>
                </S.Li>
                <S.Li>
                    <S.A href="https://github.com/paulafeltrin?tab=repositories"target="_blank"rel="noreferrer"><GoMarkGithub title='GitHub' size={50}/></S.A>
                </S.Li>
                <S.Li>
                    <S.A href="https://api.whatsapp.com/send?phone=5546999079214&text=Bem-vindo(a)!"target="_blank"rel="noreferrer"><IoLogoWhatsapp title='WhatsApp' size={50}/></S.A>
                </S.Li>
            </S.Ul>
        </S.Footer>
    )
}
