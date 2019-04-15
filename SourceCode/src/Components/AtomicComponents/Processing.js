import React from 'react';

const Processing  = (props) => (
    <div className='processing'>

        <div className="lds-default">
            <div></div><div></div><div></div>
            <div></div><div></div><div></div><div></div><div></div><div>
            </div><div></div><div></div>
            <div></div>
        </div>

        <div className='processing__txt'>
            Breathe! <br/>
            <span className='processing__txt-sub'>
                While we process your request..
            </span>
        </div>

    </div>
);

export default Processing;
