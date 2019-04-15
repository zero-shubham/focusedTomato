// Expenses Reducer

const tasksDefaultState = {};

const tasksReducer = (state = tasksDefaultState, action) => {
    switch (action.type) {
    case 'ADD_TASK':
        return {
            ...state,
            ...action.task
        };
    case 'REMOVE_TASK':
        let newObj={};
        Object.keys(state).forEach((key) => {
            if(key!==action.remove)
                newObj[key]=state[key]
        });
        return newObj;
    case 'EDIT_TASK':
        newObj={};
        Object.keys(state).forEach((key,val) => { 
            if(key===action.task)
                newObj[key]=action.target;
            else
                newObj[key]=val;
        });
        return newObj;
    case 'SET_TASKS':
        return action.tasks
    default:
        return state;
    }
};

export default tasksReducer;