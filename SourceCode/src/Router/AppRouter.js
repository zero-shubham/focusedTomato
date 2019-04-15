import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Header from '../Components/AtomicComponents/Header';
import Footer from '../Components/AtomicComponents/Footer';
import Focus from '../Components/Focus';
import Tasks from '../Components/Tasks';
import Signin from '../Components/Signin';
import Stats from '../Components/Stats';
import Settings from '../Components/Settings';
import NotFoundPage from '../Components/NotFoundPage';
import PrivateRoute from './PrivateRoute';

export const history = createBrowserHistory();

const AppRouter = (props) => (
    <Router history={history}>
        <div>
                <Header forwardref={props.forwardRef}/>
                <Switch>
                    <Route path='/' component={Signin} exact={true}/>
                    <PrivateRoute path='/focus' component={Focus}/>
                    <PrivateRoute path='/tasks' component={Tasks}/>
                    <PrivateRoute path='/stats' component={Stats}/>
                    <PrivateRoute path='/settings' component={Settings}/>
                    <Route component={NotFoundPage}/>
                </Switch>
                <Footer/>
        </div>
    </Router>
);

//forwarding the ref from canvas
export default React.forwardRef((props,ref) => <AppRouter forwardRef={ref}/>);