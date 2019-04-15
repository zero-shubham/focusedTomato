import React from 'react';

const Reset = (props) => (
    <div className='signin__reset'>
        {!props.resetSent && <input type='email' placeholder='Email' className='signin__create-text' id='email'/>}

        {
            props.resetSent ? 
            <input type='test' placeholder='Reset Code' className='signin__create-text' id='resetCode'/> :''
        }

        {
            props.resetSent ? 
            <input type='password' placeholder='Password' className='signin__create-text' id='pass'/> : ''
        }

        <button className='signin__create-signBtn'
        onClick={() => props.handleReset()}
        >
        {props.resetSent?'Confirm' : 'Reset'}
        </button>

        <span 
            className='signin__create-prompt' onClick={() => props.changeDisplay('signin')}>
            I have my password!
        </span>
    </div>
);

export default Reset;