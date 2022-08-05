import React, { useState } from 'react';


let red = 0;
let green = 200;
let blue = 150;


//ESTILOS CUANDO ESTA LOGUEADO
const loggedStyle = {
    backgroundColor: `rgb(${red},${green},${blue})`,
    color: 'white'
}

//ESTILOS PARA USUARIO NO LOGUEADO
const unloggedStyle = {
    backgroundColor: 'tomato',
    color: 'white',
    fontWeight: 'bold'
}
// LOGIN /LOGOUT BUTTONS

const LoginButton = ({ LoginAction, propstyle }) => {
    return (
        <button style={propstyle} onClick={LoginAction}>login</button>
    )
}
const LogoutButton = ({ LogoutAction, propstyle }) => {
    return (
        <button style={propstyle} onClick={LogoutAction}>logout</button>
    )
}

// ? (expresion true) && => se renderia la expresion
// ? (expresion false) && => no se renderia la expresion




const OptionalRender = () => {

    const [access, setAccess] = useState(true);
    const [nmessages, setNmessages] = useState(0);

    // function updateAccess() {
    //     setAccess(!access);
    // }


    const LoginAction = () => {
        setAccess(true);
    }
    const LogoutAction = () => {
        setAccess(false);
    }

    let optionalButton;

    // if (access) {
    //     optionalButton = <button onClick={updateAccess}>logout</button>
    // } else {
    //     optionalButton = <button onClick={updateAccess}>login</button>
    // }
    if (access) {
        optionalButton = <LogoutButton propstyle={unloggedStyle} LogoutAction={LogoutAction}></LogoutButton>
    } else {
        optionalButton = <LoginButton propstyle={loggedStyle} LoginAction={LoginAction}></LoginButton>
    }

    //unread messages
    let addMessages = () => {
        setNmessages(nmessages + 1)
    }

    return (
        <div>
            {/* OPTIONAL BUTTON */}
            {optionalButton}

            {/* N messages */}
            {nmessages > 0 && nmessages === 1 && <p>you have {nmessages} new message</p>}
            {nmessages > 1 && <p>you have {nmessages} new messages</p>}
            {nmessages === 0 && <p>there are not messages</p>}

            {/* ternary operator */}
            {nmessages > 0 ?
                <p>you have {nmessages} new message{nmessages > 1 ? 's' : null}</p>
                :
                <p>there are not messages</p>
            }
            <button onClick={addMessages}>new message</button>
        </div>
    );
}

export default OptionalRender;
