import database from '../firebase/firebase';

export const addTask = ({task,target}) => ({
    type: 'ADD_TASK',
    task:{[task]: target}
});

export const startAddTask = ({task,target}) =>{
    return (dispatch,getState) => {
        const uid = getState().auth.cred.uid;
        database.ref(`users/${uid}/tasks`).update({[task]:target}).then(() => {
            dispatch(addTask({task,target}));
        });

    };
};

export const removeTask = (task) => ({
    type: 'REMOVE_TASK',
    remove: task
});

export const startRemoveTask = (task) => {
    return (dispatch,getState) => {
        const uid = getState().auth.cred.uid;
        database.ref(`users/${uid}/tasks/${task}`).remove().then( () => {
            dispatch(removeTask(task));
            //this is to set the empty flag to true, since that helps in rendering logic
            database.ref(`users/${uid}/tasks`).once('value');/*.then((snapshot)=>{
                if(Object.keys(snapshot.val()).length===1){
                    database.ref(`users/${uid}/tasks`).update({empty:true});
                }
            });*/
            
        })
    }
}

export const editTask = ({task,target}) => ({
    type: 'EDIT_TASK',
    task: task,
    target: target
});

export const setTasks = (tasks) => ({
    type: 'SET_TASKS',
    tasks
});

export const startEditTask = ({task, target}) => {
    return (dispatch,getState) => {
        const uid = getState().auth.cred.uid;
        dispatch(editTask({task,target}));
        database.ref(`users/${uid}/tasks`).update({[task]:target});
    }
};

export const startSetTasks = () => {
    return (dispatch,getState) => {
        const uid = getState().auth.cred.uid;
        return database.ref(`users/${uid}/tasks`).once('value').then((snapshot) => {
            dispatch(setTasks(snapshot.val()))
        })
    }
};