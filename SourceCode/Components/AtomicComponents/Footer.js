import React from 'react';
import {Link} from 'react-router-dom';

import Icon from './Icon';

const Footer = () => (
    <div className='footer'>

        <Link className='footer__container' to='/focus'>
            FOCUS
            <Icon icon={`stopwatch`}/>
        </Link>
        
        <Link 
        to='/tasks'
        className='footer__container'
        >
            TASKS
        <Icon icon={`list2`}/>

        </Link>

        <Link 
        to='/stats' 
        className='footer__container'
        >
            STATS
            <Icon icon={`stats-dots`}/>
        </Link>
        
        <Link 
        to='/settings'
        className='footer__container'
        >
            SETTINGS
            <Icon icon={`cog`}/>
        </Link>

    </div>
);

export default Footer;