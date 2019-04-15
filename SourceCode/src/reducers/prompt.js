const promptDefaultState = {};

const promptReducer = (state=promptDefaultState,action) => {
    switch(action.type){
        case 'NEW__PROMPT':
        return{
            prompt: action.prompt,
            promptIcon: action.promptIcon,
            promptText: action.promptText,
            passReset: action.passReset,
            onConfirm: action.onConfirm
        };
        default:
        return state;
    }
};
export default promptReducer;