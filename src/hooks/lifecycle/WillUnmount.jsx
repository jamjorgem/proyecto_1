/**
 * ejemplo de uso de ciclo de vida en componente clase
 * y el hook del ciclo de vida  en componente funcional
 */

import React, { Component } from 'react';
import { useEffect } from 'react';

export class WillUnmount extends Component {

    componentWillUnmount() {
        console.log('Comportamiento cuando desaparece el componente ');
    }

    render() {
        return (
            <div>
                <h1>WillUnmount clase</h1>
            </div>
        );
    }
}


export const WillUnmountHook = () => {
    useEffect(() => {
        return () => {
            console.log('Comportamiento cuando desaparece el componente ');
        }
    }, []);
    return (
        <div>
            <h1>WillUnmount funcion</h1>
        </div>
    )
}
