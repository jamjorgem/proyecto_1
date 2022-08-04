/**
 * ejemplo de uso de:
 * uso de useState
 * uso de useRef
 * uso de useEffect
 */

import React, { useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {

    //VAMOS A CREAR DOS CONTADORES DISTINTOS CADA UNO EN UN ESTADO DIFERENTE

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    //VAMOS A CREAR UNA REFERENCIA CON USEREF PARA ASOCIAR UNA VARIABLE
    // CON UN ELEMENTO DEL DOM DEL CONPONENTE (VISTA HTML) 

    const miref = useRef();

    function incrementar1() {
        setContador1(contador1 + 1);
    }

    function incrementar2() {
        setContador2(contador2 + 1);
    }

    /**
     * trabajando con useEffect
     */
    /**
     * ? Caso 1: ejecutar siempre un snippet  de codigo 
     * cada vez que halla un cambio  en el estado del componente 
     * se ejecuta aquello que este dentro del useEffect()
     */

    // useEffect(() => {
    //     console.log('cambio en el estado del componente');
    //     console.log('mostrar referencia al elemento del DOM:');
    //     console.log(miref);
    // });

    /**
     * ? CASO 2:ejecutar solo cuando cambie el contador 1
     * cada vez que halla un cambio en el contador 1 se ejecuta lo que diga el useeffect
     * en caso de que cambie contador 2 no abara ejecucion
     * solo se puede tener un use effect
     */

    // useEffect(() => {
    //     console.log('cambio en el estado del contador 1');
    //     console.log('mostrar referencia al elemento del DOM:');
    //     console.log(miref);
    // }, [contador1]);

    /**
     * ? CASO 3:ejecutar solo cuando cambie el contador 1 y contador 2
     * cada vez que halla un cambio en el contador 1 se ejecuta lo que diga el useeffect
     * cada vez que halla un cambio en el contador 2 se ejecuta lo que diga el useeffect
     * solo se puede tener un use effect
     */

    useEffect(() => {
        console.log('cambio en el estado del contador 1 y contador 2');
        console.log('mostrar referencia al elemento del DOM:');
        console.log(miref);


    }, [contador1, contador2]);


    return (
        <div>
            <h1>Ejemplo useState , useRef y  useEffect</h1>
            <h2>Contador1: {contador1}</h2>
            <h2>Contador2: {contador2}</h2>
            {/* Elemento referenciado */}
            <h4 ref={miref}>
                Ejemplo de elemento referenciado
            </h4>
            {/* botones para cambiar los contadores */}
            <div>
                <button onClick={incrementar1}>Incrementar contador 1</button>
                <button onClick={incrementar2}>Incrementar contador 2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;
