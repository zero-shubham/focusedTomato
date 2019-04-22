import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const config = {
    apiKey: "*************-sD9UP3c2vSyPI",
    authDomain: "focusedtomato.firebaseapp.com",
    databaseURL: "https://focusedtomato.firebaseio.com",
    projectId: "focusedtomato",
    storageBucket: "focusedtomato.appspot.com",
    messagingSenderId: "*************"
};

firebase.initializeApp(config);

const database = firebase.database();

export const storageRef = firebase.storage();

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();


export { firebase, database as default };

