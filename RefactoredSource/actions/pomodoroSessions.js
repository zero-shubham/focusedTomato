import database from '../firebase/firebase';

export const addSession = ({date,data}) => ({
    type: 'ADD_SESSION',
    session: {date: date, data: data}
});

export const startAddSession = ({date,data}) => {
    if(data.task){  
        let taskObj = {};
        taskObj = {
            completed: data.completed,
            incomplete: data.incomplete
        };
        return (dispatch,getState) => {
            const uid = getState().auth.cred.uid;
            database.ref(`users/${uid}/data/${date}`).update({[data.task]:taskObj}).then(() => {
                dispatch(addSession({date,data}));
            });

        };
    }
    else{
        return () => {} //handling errors-> if all tasks removed then something has to be returned or throws error
    }
};

export const initSession = ({date,data}) => ({
    type: 'INIT_SESSION',
    date,
    data
});

export const startInitSession = (date) => {
    return (dispatch,getState) => {
        const uid = getState().auth.cred.uid;
        return database.ref(`users/${uid}/data`).once("value", (snapshot) => {
            if(snapshot.val()){
                if(snapshot.val()[date]){
                    let data = snapshot.val()[date];
                    dispatch(initSession({date,data}));
                }
            }
        })
    }
}