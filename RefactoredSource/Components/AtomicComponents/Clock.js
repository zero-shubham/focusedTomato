import React from 'react';

import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const Clock = (props) => (
            <div className='focus__clock'>
                <CircularProgressbar
                percentage={props.percentage}
                text={`${props.min}:${props.sec}`}
                styles={{
                    path: { stroke: `rgba(255, 129, 82)` },
                    text: { fill: '#FB8847', fontSize: '16px' },
                }}
            />

            </div>
        )
export default Clock;