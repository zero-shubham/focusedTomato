import React from 'react';
import {connect} from 'react-redux';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const TaskList = (props) => {
    let indent = [];
    
    if(props.tasks)
        props.tasks.forEach(prop => {
            if(prop !== 'empty')
                indent.push(<option key={prop} value={prop}>{capitalizeFirstLetter(prop)}</option>)
        });

    return (
        <select className='focus__btnPanel-tasks' onChange={(e)=>{
            props.onTaskChange(e.target.value)
        }}>
            {indent}
        </select>
    )
};

const mapsStateToProps = (state) => {
    return {
        tasks: !!state.tasks?Object.keys(state.tasks):false
    }
}
const ConnectedTaskList = connect(mapsStateToProps)(TaskList);

export default ConnectedTaskList;