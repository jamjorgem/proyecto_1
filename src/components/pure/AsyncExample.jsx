import React from 'react';

async function generateNumber() {
    return 1;
}

async function generatePromiseNumber() {
    return Promise.resolve(2)
}

function obtainNumberPromiseNumber() {
    generatePromiseNumber()
        .then((response) => alert(`response ${response}`))
        .catch((error) => alert(`something went wrong ${error}`));;
}
function obtainNumber() {
    generateNumber()
        .then((response) => alert(`response ${response}`))
        .catch((error) => alert(`something went wrong ${error}`));
}

async function saveSessionStorage(key, value) {
    sessionStorage.setItem(key, value);
    return Promise.resolve(sessionStorage.getItem(key))
}

function showStorage() {
    saveSessionStorage('name', 'jorge')
        .then((response) => {
            let value = response;
            alert(`saved name ${value}`);
        })
        .catch((error) => alert(`something went wrong ${error}`))
        .finally(() => {
            alert('name save and retreived success')
        });
}

async function obtainMessage() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('hello world'), 2000);
    });

    let message = await promise;

    await alert(`message recibe ${message}`);

}

const returnError = async () => {
    await Promise.reject(new Error('Oooops!'));
}

const consumeError = () => {
    returnError()
        .then((response) => alert(`everithing is ok ${response}`))
        .catch((error) => alert(`something went wrong ${error}`))
        .finally(() => alert('Finally executed'))
}

const urlNotFound = async () => {
    try {
        let response = await fetch('http://invalidURL');
        alert(`Response: ${JSON.stringify(response)}`)
    } catch (error) {
        alert(`something went wrong with you url ${error}`)
    }
}

const multiPromise = async () => {
    let results = await Promise.all([
        fetch('https://reqres.in/api/users'),
        fetch('https://reqres.in/api/users?page=2')
    ]
    ).catch((error) => alert(`something went wrong ${error}`))
}



const Asyncexample = () => {
    return (
        <div>
            <h1>Asing, promise example </h1>
            <button onClick={obtainNumber}>Obtain Number</button>
            <button onClick={obtainNumberPromiseNumber}>Obtain promise Number</button>
            <button onClick={showStorage}>save name and show</button>
            <button onClick={obtainMessage}>receibe message in 2 seconds</button>
            <button onClick={consumeError}>obtain error</button>
            <button onClick={urlNotFound}>request to unknown URL</button>
            <button onClick={multiPromise}>Multiple promise</button>
        </div>
    );
}

export default Asyncexample;
