/**
 * ejemplo de componente de tipo clase que dispone de los metodos de ciclo de vida
 */

import React, { Component } from 'react';
import PropType from 'pro';

class LifeCycleExample extends Component {

    constructor(props) {
        super(props);
        console.log('cuando se instancia el componente');
    }


    componentDidMount() {

    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default LifeCycleExample;
