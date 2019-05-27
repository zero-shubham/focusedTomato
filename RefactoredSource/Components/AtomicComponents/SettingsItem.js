import React from 'react';

const SettingItem = (props) => (
    <div className='settings__list-item'>
    <span>{props.label}</span>
    {
        props.toggle && 
        <div className='master__switch'>
            <label className="switch" htmlFor={`togBtn-${props.tag}`}></label>
            <input type="checkbox" 
                id={`togBtn-${props.tag}`}
                className="check"
                defaultChecked={props.check}
                data-tag={props.tag}
                onChange={(e)=> {
                    props.onChange(e.target.getAttribute('data-tag'),e.target.checked)
                }}
                ></input>

            <div className="slider round"></div>
        </div>
    }

    {
        !props.toggle && 
        <input className='settings__list-item-input'
        value={props.val}
        data-tag={props.tag}
        onChange={(e)=> {
            props.onChange(e.target.getAttribute('data-tag'),parseInt(e.target.value,10))
        }}
        ></input>
    }
    </div>
    )

export default SettingItem;