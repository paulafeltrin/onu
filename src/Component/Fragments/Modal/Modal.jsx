import React from 'react';
import * as S from './style'

export let Modal = ({ id= 'modal', onClose=()=>{},Children }) => {
    const ClickOutside = (event) => {
        if (event.target.id === id) onClose();
    }

    return(
        <S.Modal id={id} onClick={ClickOutside}>
            <S.Content>
                <button onClick={onClose}>Close</button>
                {Children}
            </S.Content>
        </S.Modal>
    )
}

// export const Modal = (props) => {
// ({ id= 'modal', onClose=()=>{},children }) => {
    // const ClickOutside = (event) => {
    //     if (event.target.id === id) onClose();
    // }
    // return(
    //     <S.Modal>
    //         <S.Content>
    //             {props.children}
    //         </S.Content>
    //     </S.Modal>
        // <S.Modal id={id} onClick={ClickOutside}>
        //     <S.Content>
        //         <button onClick={onClose}>Close</button>
        //         <div>{children}</div>
        //     </S.Content>
        // </S.Modal>
   
        