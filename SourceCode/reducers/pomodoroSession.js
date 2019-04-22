// Sessions Reducer

let pomodoroSessionDefaultState = {};

const pomodoroSessionReducer = (state = pomodoroSessionDefaultState, action) => {
    switch (action.type) {
    case 'ADD_SESSION':
        const date = action.session.date;
        const data = action.session.data;
        let obj = {
            ...state,
        };
        let taskObj = {};

        taskObj[data.task] = {
            completed: data.completed,
            incomplete: data.incomplete
        };

        obj[date] = {...state[date], ...taskObj}
        return obj;
    case 'INIT_SESSION':
        obj = {};
        obj[action.date] = action.data;
        return obj
    default:
        return state;

    }
};

export default pomodoroSessionReducer;