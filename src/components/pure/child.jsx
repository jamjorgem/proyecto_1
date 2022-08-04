import React, { useRef } from 'react';

const Child = ({ name, send, update }) => {

    function pressButton() {
        const text = messageRef.current.value;
        alert(`default text ${text}`)
    }

    function pressButoonParams(text) {
        alert(`text:${text}`)
    }

    const messageRef = useRef('');
    const nameRef = useRef('');

    function submitName(e) {
        e.preventDefault();
        update(nameRef.current.value);
    }

    return (
        <div style={{ background: 'cyan', padding: '30px' }}>
            <p onMouseOver={() => console.log('on mouse over')}>Hello {name}</p>
            <button onClick={() => console.log('press btn 1')}>button 1</button>
            <button onClick={pressButton}>button 2</button>
            {/* PARA PASAR PARAMETROS SE REALIZA DE LA SIGUIENTE FORMA */}
            <button onClick={() => pressButoonParams('hello')}>button 3</button>


            <input ref={messageRef} placeholder='Insert a text'
                onFocus={() => console.log('input focus')}
                onChange={(e) => console.log('input change', e.target.value)}
                onCopy={() => console.log('copye text from input')}

            />

            <button onClick={() => send(messageRef.current.value)}>Send Message</button>
            <div style={{ marginTop: '20px' }}>
                <form onSubmit={submitName}>
                    <input placeholder='new name' ref={nameRef} />
                    <button type='submitName'>Update Name</button>
                </form>
            </div>
        </div>
    );
}

export default Child;
