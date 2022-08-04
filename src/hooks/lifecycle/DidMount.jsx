/**
 * ejemplo de uso de ciclo de vida en componente clase
 * y el hook del ciclo de vida  en componente funcional
 */

import React, { Component } from 'react';
import { useEffect } from 'react';

export class DidMount extends Component {

    componentDidMount() {
        console.log('Comportamientos antes de que el componente sea añadido al DOM ');
    }

    render() {
        return (
            <div>
                <h1>DidMount clase</h1>
            </div>
        );
    }
}


export const DidMountHook = () => {
    useEffect(() => {
        console.log('Comportamientos antes de que el componente sea añadido al DOM');
    }, []);
    return (
        <div>
            <h1>DidMount funcion</h1>
        </div>
    )
}
