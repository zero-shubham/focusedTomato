import React, {Suspense} from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Header from '../Components/AtomicComponents/Header';
import Footer from '../Components/AtomicComponents/Footer';

import Processing from '../Components/AtomicComponents/Processing';
import NotFoundPage from '../Components/NotFoundPage';
import PrivateRoute from './PrivateRoute';

//====lazy loading====
const Index = (
    React.lazy(() => import('../Components/Index'))
);
const Focus = (
    React.lazy(() => import('../Components/Focus'))
);
const Stats = (
    React.lazy(() => import('../Components/Stats'))
);
const Tasks = (
    React.lazy(() => import('../Components/Tasks'))
);
const Settings = (
    React.lazy(() => import('../Components/Settings'))
);

export const history = createBrowserHistory();

const AppRouter = (props) => (
    <Router history={history}>
        <div className='canvas__flexboxContainer'>
                <Header forwardref={props.forwardRef}/>
                    <Suspense fallback={<div className='dynamicload'><Processing/></div>}>
                        <Switch>
                            <Route path='/' component={(props) => <Index {...props}/>} exact={true}/>
                            <PrivateRoute path='/focus' component={Focus}/>
                            <PrivateRoute path='/tasks' component={Tasks}/>
                            <PrivateRoute path='/stats' component={Stats}/>
                            <PrivateRoute path='/settings' component={Settings}/>
                            <Route component={NotFoundPage}/>
                        </Switch>
                    </Suspense>
                <Footer/>
        </div>
    </Router>
);

//forwarding the ref from canvas
export default React.forwardRef((props,ref) => <AppRouter forwardRef={ref}/>);