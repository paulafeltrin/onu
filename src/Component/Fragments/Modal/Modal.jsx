import React from 'react';
import * as S from './style'

export const Modal = ({ id= "modal", onClose = ()=>{}, children }) => {
    const ClickOutside = (event) => {
        if (event.target.id === id) onClose();
    }

    return(
        <S.Modal id={id} onClick={ClickOutside}>
            <S.Content>
                <button onClick={onClose}/>
                {children}
            </S.Content>
        </S.Modal>
    )
}
