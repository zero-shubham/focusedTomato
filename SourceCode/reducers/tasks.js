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
            if(key!==action.remove){
                newObj[key]=state[key]
            }
        });
        return newObj;
    case 'EDIT_TASK':
        newObj = {...state};
        newObj[action.task] = action.target
        return newObj;
    case 'SET_TASKS':
        return action.tasks
    default:
        return state;
    }
};

export default tasksReducer;