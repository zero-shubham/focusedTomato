import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {addPrompt} from '../actions/prompt';

const PrivateRoute = ({path,isAuthenticated,component:Component,...rest}) => {
    if(!isAuthenticated){
        rest.addPrompt();
        return (
            <Redirect to='/'/>
        )
    }else{
        return (
            <Route {...rest} component={() => <Component/>} path={path}/>
        )
    }
    
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPrompt: () => dispatch(addPrompt({
            prompt:true,
            promptIcon: 'attention',
            promptText:'Arggh..You are not logged in!'
        }))
    }
}

const mapsStateToProps = (store) => {
    return {
        isAuthenticated: !!store.auth.cred
    }
};

export default connect(mapsStateToProps,mapDispatchToProps)(PrivateRoute);