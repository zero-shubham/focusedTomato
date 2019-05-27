
const authDefaultState = {};

const authReducer = (state=authDefaultState,action) => {
    switch(action.type){
        case 'LOGIN':
        return{
            cred: action.cred
        };
        case 'LOGOUT':
        return {};
        default:
        return state;
    }
};
export default authReducer;