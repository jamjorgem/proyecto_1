import React, { useEffect } from 'react'

export default function AllCycles() {

    useEffect(() => {
        console.log('componente creado');

        const intervalID = setInterval(() => {
            document.title = `${new Date()}`;
            console.log('actualizacion del componente');
        }, 1000);
        return () => {
            console.log('componente va a desaparecer');
            document.title = 'Tiempo detenido';
            clearInterval(intervalID);
        };
    }, []);

    return (
        <div>AllCycles</div>
    )
}
