/**
 * componente del formulario para login 
 */

import React, { useState } from 'react'

export default function loginForm() {

    const initialCredentials = [
        {
            user: '',
            password: ''
        }
    ];

    const [credentials, setCredentials] = useState(initialCredentials);

    return (
        <div>loginForm</div>
    )
}
