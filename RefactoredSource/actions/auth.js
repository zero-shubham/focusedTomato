import {firebase, googleAuthProvider, facebookAuthProvider, storageRef} from '../firebase/firebase';

import {addPrompt} from './prompt';

export const startGoogleLogin = () => {
    return (dispatch) => {
        return firebase.auth().signInWithPopup(googleAuthProvider).then((result)=>{
            let user = result.user;
            let cred  = {
                name: user.displayName,
                photoUrl: user.photoURL,
                uid: user.uid
            }
            dispatch(login('LOGIN',cred));
        }).catch((error) => {
            dispatch(addPrompt({prompt:true,promptIcon:'attention',promptText:error.message}))
        });
    };
};

export const startFBLogin = () => {
    return (dispatch) => {
        return firebase.auth().signInWithPopup(facebookAuthProvider).then((result)=>{
            let user = result.user;
            let cred  = {
                name: user.displayName,
                photoUrl: user.photoURL,
                uid: user.uid
            }
            dispatch(login('LOGIN',cred));
        }).catch((error) => {
            dispatch(addPrompt({prompt:true,promptIcon:'attention',promptText:error.message}))
        });
    };
};

export const startEmailLogin = ({email,password}) => {
    return (dispatch) => {
        return firebase.auth().signInWithEmailAndPassword(email,password).then((result)=>{
            let user = result.user;

            //getting image from store and setting to state
            storageRef.ref(`${user.uid}`).getDownloadURL().then(url =>{
                let cred  = {
                    name: user.displayName,
                    photoUrl: url,
                    uid: user.uid
                }
                dispatch(login('LOGIN',cred));
            });
        }).catch((error) => {
            dispatch(addPrompt({prompt:true,promptIcon:'attention',promptText:error.message}))
        });
    };
}



export const login = (type,cred) => {
    return {
        type,
        cred
    };
};


//===================================+CREATE USER WITH EMAIL=========================================

export const startSignup = ({email,password,name,file}) => {
    return (dispatch) => {
        let user;
        return firebase.auth().createUserWithEmailAndPassword(email,password).then((result) => {
            user = firebase.auth().currentUser;
            user.sendEmailVerification();
            //storing image to storage
            storageRef.ref().child(result.user.uid).put(file,{contentType: file.type});
            user.updateProfile({
                displayName: name
            });
            
        }).catch((error) => {
            dispatch(addPrompt({prompt:true,promptIcon:'attention',promptText:error.message}))
        });


    }
}


//========================LOGOUT==============================================
export const startLogout = () => {
    return () => {
        firebase.auth().signOut();
    };
};

export const logout = () => {
    return {
        type: 'LOGOUT'
    };
};
