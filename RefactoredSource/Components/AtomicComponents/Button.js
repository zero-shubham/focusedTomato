import React from 'react';

import svg from '../../assets/sprite.svg';

const Button = (props) => (
    <span className={props.cssClass? props.cssClass :`button`} onClick={() => {
        if(props.task)
            props.clicked(props.task)
        else
            props.clicked()
    }}>
        <svg className={`btn__icon icon-${props.icon}`}>
        <use 
            xlinkHref={`${svg}#icon-${props.icon}`}     
        />
        </svg>
        {props.text && <span className={'buttonSecondary__text'}>{props.text}</span>}
    </span>
);

export default Button;