import database from '../firebase/firebase';

export const editConfig = ({setting,config}) => ({
    type: 'EDIT_CONFIG',
    update: {
        [setting]: config
    }
});

export const initConfig = (config) => {
    return {
        type: 'INIT_CONFIG',
        config
    }
};

export const startEditConfig = ({setting,config}) => {
    return (dispatch,getState) => {
        const uid = getState().auth.cred.uid;
        database.ref(`users/${uid}/config`).update({[setting]:config}).then(() => {
            dispatch(editConfig({setting,config}));
        });
    };

};

export const startInitConfig = () => {
    return (dispatch,getState) => {
        const uid = getState().auth.cred.uid;
        return database.ref().child(`users/${uid}/config`).once('value', (snapshot)=>{
            const configDefaultState = {
                focusDuration: 25,
                shortBreakDuration: 5,
                longBreakDuration: 25,
                sessionBeforeLongBreak: 4,
                notification: true,
                silent: false
            };
            if(!snapshot.val())
                database.ref(`users/${uid}/config`).update(configDefaultState);
            else{
                let config;
                database.ref(`users/${uid}/config`).once('value').then( (snapshot) => {
                    config = snapshot.val();
                }).then(() => {
                    dispatch(initConfig(config));
                })
            }
        })
    }

};