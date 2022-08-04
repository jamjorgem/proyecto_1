/**
 * ejemplo de uso de ciclo de vida en componente clase
 * y el hook del ciclo de vida  en componente funcional
 */

import React, { Component } from 'react';
import { useEffect } from 'react';

export class DidUpdate extends Component {

    componentDidUpdate() {
        console.log('Comportamiento cuando se actualiza el componente,actualziacion de estado ');
    }

    render() {
        return (
            <div>
                <h1>DidUpdate clase</h1>
            </div>
        );
    }
}


export const DidUpdateHook = () => {
    useEffect(() => {
        console.log('Comportamiento cuando se actualiza el componente,actualziacion de estado');
    });
    return (
        <div>
            <h1>DidUpdate funcion</h1>
        </div>
    )
}
