import * as S from './style'
import { StyledLink } from './style'

export default function Erro(){
    return(
        <S.Div>
            <S.H2>Erro! Você se perdeu!</S.H2>
            <StyledLink to='/'>Clique Aqui</StyledLink>
            <S.P>para voltar ao site</S.P>
        </S.Div>
    )
}