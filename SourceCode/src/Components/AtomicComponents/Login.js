import React from 'react';

const Login = (props) => (
    <div className='signin__login'>
        <input type='email' placeholder='Email' className='signin__create-text' id='email'/>
        <input type='password' placeholder='Password' className='signin__create-text' id='pass'/>

        <button className='signin__create-signBtn'
            onClick={() => props.handleSign()}
        >
        Sign-in
        </button>

        <span 
            className='signin__create-prompt' onClick={() => props.changeDisplay('reset')}>
            Reset password!
        </span>

        <span 
            className='signin__create-prompt' onClick={() => props.changeDisplay('signup')}>
            I don't have an account!
        </span>
    </div>
);

export default Login;