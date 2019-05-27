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
                    legend:false,
                    maintainAspectRatio : false,
                    responsive: true
                }}
            />
        )
    else if(props.type === 'doughnut')
        return (
            <div className="doughnutChart">
                <Doughnut 
                data={props.data}
                options={{
                    title:{
                    display:true,
                    fontSize:18,
                    text: props.title
                    },
                    legend:false,
                    maintainAspectRatio : false,
                    responsive: true
                }}
            />
            <div className='stats__doughnut-legend'>
                <span className='stats__doughnut-legend-completed'>Completed</span>
                <span className='stats__doughnut-legend-incomplete'>Incomplete</span>
            </div>
            </div>
        ) 

};

export default Chart;
