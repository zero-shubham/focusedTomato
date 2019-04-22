import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import tasksReducer from '../reducers/tasks';
import pomodoroSessionReducer from '../reducers/pomodoroSession';
import configReducer from '../reducers/config';
import authReducer from '../reducers/auth';
import promptReducer from '../reducers/prompt';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
    const store = createStore(
        combineReducers({
            data: pomodoroSessionReducer,
            tasks: tasksReducer,
            config: configReducer,
            auth: authReducer,
            prompt: promptReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}
