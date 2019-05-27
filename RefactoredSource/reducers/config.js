//
const configDefaultState = {
    focusDuration: 25,
    shortBreakDuration: 5,
    longBreakDuration: 25,
    sessionBeforeLongBreak: 4,
    notification: true,
    silent: false
};

const configReducer = (state = configDefaultState, action) => {
    switch (action.type) {
    case 'EDIT_CONFIG':
        return {
            ...state,
            ...action.update
        }
    case 'INIT_CONFIG':
        return action.config
    default:
        return state;
    }
};

export default configReducer;