import React from 'react';

const Loading = () => (
    <div className='loading'>
        <span className='loading__text'>
            In this age of distractions, train your focus and keep track of it!
        </span>
        <div className="lds-spinner">
            <div></div><div></div><div></div><div></div>
            <div></div><div></div><div></div><div></div>
            <div></div><div></div><div></div><div></div>
        </div>
    </div>
);

export default Loading;