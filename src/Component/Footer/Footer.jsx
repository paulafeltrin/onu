import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { GoMarkGithub } from "react-icons/go";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Footer(){
return(
        <footer>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/paulafeltrin/"target="_blank"rel="noreferrer"><AiFillLinkedin/></a>
                </li>
                <li>
                    <a href="https://github.com/paulafeltrin?tab=repositories"target="_blank"rel="noreferrer"><GoMarkGithub/></a>
                </li>
                <li>
                    <a href="https://api.whatsapp.com/send?phone=5546999079214&text=Bem-vindo(a)!"target="_blank"rel="noreferrer"><IoLogoWhatsapp/></a>
                </li>
            </ul>
        </footer>
    )
}

// <footer>
// <S.Ul>
//     <S.A href="https://www.linkedin.com/in/paulafeltrin/"><AiFillLinkedin/> 
//         <S.Li>LinkedIn</S.Li>
//     </S.A>
//     <S.A href="https://github.com/paulafeltrin?tab=repositories"><GoMarkGithub/> 
//         <S.Li>GitHub</S.Li>
//     </S.A>
//     <S.A href="https://api.whatsapp.com/send?phone=5546999079214&text=Bem-vindo(a)!"><IoLogoWhatsapp/>
//         <S.Li>WhatsApp</S.Li>
//     </S.A>
//     <S.A href="https://www.facebook.com/paula.feltrin.923/"><AiFillFacebook/>
//         <S.Li>Facebook</S.Li>
//     </S.A>
// </S.Ul>