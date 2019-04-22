import React,{Component} from 'react';

import Indicator from './Indicator';

class Indicators extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let key;
        let active = [], inactive = [];
        for(key=1; key<=this.props.active + this.props.inactive ; key++){
            if(key<=this.props.active){
                active.push(<Indicator key={key} class={`active indicator`}/>)
            }else{
                inactive.push(<Indicator key={key} class={`indicator`}/>)
            }
        }

        return (
            <div className='indicators'>
                {active}
                {inactive}
            </div>
        )
    }

}

export default Indicators;