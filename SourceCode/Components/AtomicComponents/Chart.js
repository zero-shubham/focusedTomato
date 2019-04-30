import React from 'react';
import {Bar,Line,Doughnut} from 'react-chartjs-2';

const Chart = (props) => {
    if(props.type === 'bar')
        return (
            <Bar 
                data={props.data}
                options={{
                    title:{
                    display:true,
                    fontSize:18,
                    text: props.title
                    },
                    legend:false
                }}
                width={400}
                height={300}
            />
        )
    else if(props.type === 'line')
        return (
            <Line 
                data={props.data}
                options={{
                    title:{
                    display:true,
                    fontSize:18,
                    text: props.title
                    },
                    legend:false
                }}
                width={400}
                height={300}
            />
        )
    else if(props.type === 'doughnut')
        return (
            <div>
                <Doughnut 
                data={props.data}
                options={{
                    title:{
                    display:true,
                    fontSize:18,
                    text: props.title
                    },
                    legend:false
                }}
                width={400}
                height={300}
            />
            <div className='stats__doughnut-legend'>
                <span className='stats__doughnut-legend-completed'>Completed</span>
                <span className='stats__doughnut-legend-incomplete'>Incomplete</span>
            </div>
            </div>
        ) 

};

export default Chart;
