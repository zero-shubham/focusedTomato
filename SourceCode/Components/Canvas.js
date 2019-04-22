import React,{Component} from 'react';

import AppRouter from '../Router/AppRouter';

class Canvas extends Component{
    constructor(){
        super();
        this.dropdownRef = React.createRef();//this ref was added to deactivate the dropdown on any click on the canvas can be done better
    }

    onClickFunc = (e) => {
        if(this.dropdownRef.current && !e.target.classList.contains('header__user-dropdown-logout'))
            this.dropdownRef.current.classList.remove('active');
    }

    render(){
        return (
            <div className='canvas' onClick={this.onClickFunc} >
                <AppRouter ref={this.dropdownRef}/>
            </div>
        );
    }
}

export default Canvas;