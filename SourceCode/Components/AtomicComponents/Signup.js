import React from 'react';

const Signup = (props) => (
    <div className='signin__signup'>
        <input type='text' placeholder='Name' className='signin__create-text' id='name'/>
        <input type='email' placeholder='Email' className='signin__create-text' id='email'/>
        <input type='password' placeholder='Password' className='signin__create-text' id='pass'/>
        <span className='signin__create-upload'>Upload your avatar:</span>
        <input type='file' id='profilePic'/>

        <button className='signin__create-signBtn'
            onClick={() => props.handleSign()}
        >
        Sign-up
        </button>

        <span 
            className='signin__create-prompt' onClick={() => props.changeDisplay('signin')}>
            I already have an account!
        </span>
    </div>
);

export default Signup;