import React, { useState } from 'react'

export default function registerForm() {

    const initialData = [
        {
            user: '',
            name: '',
            email: '',
            password: ''
        }
    ];

    const [data, setData] = useState(initialData);


    return (
        <div>registerForm</div>
    )
}
