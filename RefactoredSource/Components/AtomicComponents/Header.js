import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import { history } from '../../Router/AppRouter';
import {startLogout,logout} from '../../actions/auth';

import chevSvg from '../../assets/chevron-arrow-down.svg';

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            dropdownStatus : 'header__user-dropdownMenu'
        }
    };

    removeActive = () => {
        let classPassed;
        if(this.state.dropdownStatus === 'header__user-dropdownMenu active')
            classPassed = 'header__user-dropdownMenu';
        else
            classPassed = 'header__user-dropdownMenu active';
        this.setState((state)=>({...state,dropdownStatus: classPassed}));
    };
    render(){
        return (
            <div className='header'>
                <Link className='header__logo' to={this.props.auth?'/focus':'/'}>
                    FocusedTomato
                </Link>

                {//if there is not auth state don't render user part
                    this.props.auth &&
                    <div className='header__user'>
                    <img src={this.props.cred.photoUrl} className='header__user-img'/>
                    <span className='header__user-name'>{this.props.cred.name}</span>
                    
                    <span
                        className='header__user-dropdown-chev'
                        onClick={this.removeActive}
                        >
                        <img id='chevSvg' src={`${chevSvg}`}/>
                    </span>
                    <span className={this.state.dropdownStatus} ref={this.props.forwardref} >
                        <span className='header__user-dropdown-delete' >delete</span>
                        <span
                            className='header__user-dropdown-logout'
                            onClick={()=> {
                                this.props.dispatch(startLogout());
                                this.props.dispatch(logout())
                                this.removeActive();
                                history.push('/');
                            }}
                            >logout</span>
                    </span>
                    
                </div>
                }
                
            </div>
        )
    }
}

const mapsStateToProps = (store) => {
    //sending auth to tell whether logged in or not and cred with all the needed credentials
    return {
        auth: store.auth.cred?true:false,
        cred: store.auth.cred
    }
};

//no need of forwardRef as AppRouter passed it as prop
const ConnectedAuth = connect(mapsStateToProps)(Header);
export default ConnectedAuth;
