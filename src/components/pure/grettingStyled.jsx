import React, { useState } from 'react';

//DEFINIENDO ESTILOS EN CONSTANTES
const GrettingStyled = (props) => {
    //ESTULOS CUANDO ESTA LOGUEADO
    const loggedStyle = {
        color: 'blue'
    }

    //ESTILOS PARA USUARIO NO LOGUEADO
    const unloggedStyle = {
        color: 'tomato',
        fontWeight: 'bold'
    }

    //PARA CONTROLAR SI EL USUARIO ESTA LOGUEADO O NO 
    const [logged, setLogged] = useState(false);


    return (
        <div style={logged ? loggedStyle : unloggedStyle}>
            {logged ? (<p>Hola,{props.name}</p>) : (<p>please login</p>)}
            <button onClick={() => {
                console.log('boton pulsado');
                setLogged(!logged);
            }}>{logged ? 'Logout' : 'Log in'}</button>
        </div>
    )
}

export default GrettingStyled;
