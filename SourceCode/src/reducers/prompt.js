const promptDefaultState = {};

const promptReducer = (state=promptDefaultState,action) => {
    switch(action.type){
        case 'NEW__PROMPT':
        return{
            prompt: action.prompt,
            promptIcon: action.promptIcon,
            promptText: action.promptText
        };
        case 'RESET__PROCESSING':
        return {
            ...state,
            processing: action.processing
        }
        default:
        return state;
    }
};
export default promptReducer;