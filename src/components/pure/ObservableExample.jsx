import React from 'react';
import { useState } from 'react';
import { getNumbers } from '../../services/observableService';

const ObservableExample = () => {

    const [number, setNumber] = useState(0);

    const obtaiNnewNumbers = () => {
        console.log('subscription to observable');
        getNumbers.subscribe({
            next(newNumber) {
                console.log('new value:', newNumber);
                setNumber(newNumber)
            },
            error(error) {
                alert(`something went wrong ${error}`)
                console.log('error observable');
            },
            complete() {
                alert(`Finished ${number}`);
                console.log('done observable');
            }
        });

    }

    return (
        <div>
            <h2>Number: {number}</h2>
            <button onClick={obtaiNnewNumbers}>Obtain new numbers</button>
        </div>
    );
}

export default ObservableExample;
