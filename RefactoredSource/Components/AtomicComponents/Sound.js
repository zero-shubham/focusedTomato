import React from 'react';
let url = require('../../assets/ring.mp3');

const Sound = React.forwardRef((props,ref) =>
(
    <audio ref={ref}>
        <source src={`${url}`}
        type='audio/mpeg'></source>
    </audio>
)
)

export default Sound;