/**
 * ejemplo de 
 * usestate()
 * usecontext()
 */

import React, { useState, useContext } from 'react';

/**
 * dispone de un contexto que tiene un valor que recibe desde el padre
 * @returns 
 */

const miContexto = React.createContext(null);

const Component1 = () => {

    /**
     * que llenara con los datos del padre
     */
    const state = React.useContext(miContexto);

    return (
        <div>
            <h1>El token es: {state.token}</h1>

            <Component2></Component2>
        </div>

    );
}
const Component2 = () => {

    const state = useContext(miContexto);
    return (
        <div>
            <h2>La sesion es {state.sesion}</h2>
        </div>
    );
}

const MiComponenteConContexto = () => {

    const estadoInicial = {
        token: '1234567',
        sesion: 1
    }

    // creamos estado de este componente

    const [sesiondata, setSesiondata] = useState(estadoInicial);

    function actualizarSesion() {
        setSesiondata({
            token: 'jwt123456789',
            sesion: sesiondata.sesion + 1
        })
    }

    return (
        <miContexto.Provider value={sesiondata}>
            {/* todo lo que esta aqui puede leer los datos de sesiondata y puede actualizarse
            ademas si se actualiza los componentes de aqui tambien se actualizan */}
            <h1>Ejemplo de usestate y usecontext</h1>
            <Component1></Component1>
            <button onClick={actualizarSesion}>Actualizar sesion</button>
        </miContexto.Provider>
    );
}

export default MiComponenteConContexto;


