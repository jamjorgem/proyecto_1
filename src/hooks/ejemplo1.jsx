// ejemplo de uso del hook usestate
// crear componente de tipo funcion y acceder a su estado privado atraves 
// de un hook y poder modificarlo

import React, { useState } from 'react';

const Ejemplo1 = () => {

    //VALOR INICIAL CONTADOR
    const valorInicial = 0;
    //VALOR INICIAL PARA UNA PERSONA
    const personaInicial = {
        nombre: 'Jorge',
        email: 'jam.jorgem@gmail.com'
    }

    // Queremos que el valor inicial y persona inicial sean parte del estado del 
    // componente para asi poder gestionar su cambio y este se ve reflejado en la vista 
    // del componente.
    // const[nombreVariable,funcionacambiar] = useState (valorinicial)

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    /**
     * funcion para actualizar el estado privado del contador
     */
    function incrementarContador() {
        setContador(contador + 1);
    }
    /**
     * funcion para actualizar el estado privado de la persona inicial
     */
    function actualizarPersona() {
        setPersona(
            {
                nombre: 'andres',
                email: 'andres@gmail.com'
            }
        )
    }

    return (
        <div>
            <h1>Ejemplo de useState()</h1>
            <h2>Contador {contador}</h2>
            <h1>Datos de la persona</h1>
            <h3>Nombre: {persona.nombre}</h3>
            <h3>Email: {persona.email}</h3>

            {/* BLOQUE DE BOTONES PARA ACTUALZIAR ESTADO */}

            <div>
                <button onClick={incrementarContador}>Incrementar Contador</button>
                <button onClick={actualizarPersona}>Cambiar persona</button>
            </div>

        </div>
    );
}

export default Ejemplo1;
