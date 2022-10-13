import { Children } from 'react'
import * as S from './style'

export default function Card({num,title, Children}){
  return(
    <S.Section>
      <S.Div>
        <p>{num}</p>
        <h2>{title}</h2>
        <div>{Children}</div>
        
        {/* <img src={onu.foto} alt={"Foto "+ title}/> */}
      </S.Div>
    </S.Section>
  )
}

// function Card(props) {
//   return (
//     <div>
//       <div>
//         <img
//           src={props.author.avatarUrl}
//           alt={props.author.name}
//         />
//         <div>
//           {props.author.name}
//         </div>
//       </div>
//       <div>
//         {props.text}
//       </div>
//       <div>
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// }



// function Glossary(props) {
//   return (
//     <dl>
//       {props.items.map(item => (
//         // Sem a `key`, React irá disparar um aviso
//         <React.Fragment key={item.id}>
//           <dt>{item.term}</dt>
//           <dd>{item.description}</dd>
//         </React.Fragment>
//       ))}
//     </dl>
//   );
// }