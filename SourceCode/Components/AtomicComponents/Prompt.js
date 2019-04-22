import React from 'react';

import envelope from '../../assets/envelope.svg';
import attention from '../../assets/attention.svg';

const Prompt  = (props) => (
    <div className='prompt'>

        <img src={props.icon==='envelope'?`${envelope}`:`${attention}`} className='prompt__icon'/>

        <div className='prompt__txt'>
            {props.promptText}
        </div>

        <div className='prompt__btnContainer'>
            <span className='prompt__btn' onClick={props.close}>CLOSE</span>
        </div>
        
    </div>
);

export default Prompt;
