import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import Signin from '../Components/Signin';

const PrivateRoute = ({path,isAuthenticated,component:Component,...rest}) => {
    if(!isAuthenticated){
        return (
            <Route {...rest} component={()=>(<Signin promptRoute={true} promptMsg={'Arggh..You are not logged in!'}/>)} path='/error'/>
        )
    }else{
        return (
            <Route {...rest} component={Component} path={path}/>
        )
    }
    
};

const mapsStateToProps = (store) => {
    return {
        isAuthenticated: !!store.auth.cred
    }
};

export default connect(mapsStateToProps)(PrivateRoute);