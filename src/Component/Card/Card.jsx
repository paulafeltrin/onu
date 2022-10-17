import * as S from './style'

export default function Card({num,title, Children}){
  return(
      <S.Div>
        <S.Head>
          <S.Num>{num}</S.Num>
          <S.Topic>{title}</S.Topic>
        </S.Head>
        <S.Img>{Children}</S.Img>
        {/* <S.Button>{btn}</S.Button> */}
      </S.Div>
  )
}
