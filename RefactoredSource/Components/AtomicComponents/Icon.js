import React from 'react';

import svg from '../../assets/sprite.svg';

const Icon = (props) => (
    <svg className={`icon icon-${props.icon}`}>
        <use 
            xlinkHref={`${svg}#icon-${props.icon}`}     
        />
    </svg>
);

export default Icon;