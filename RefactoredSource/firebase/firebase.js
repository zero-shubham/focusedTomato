import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyAlDJQuuqaQ4sVBYoUJV-sD9UP3c2vSyPI",
    authDomain: "focusedtomato.firebaseapp.com",
    databaseURL: "https://focusedtomato.firebaseio.com",
    projectId: "focusedtomato",
    storageBucket: "focusedtomato.appspot.com",
    messagingSenderId: "390856360712"
};

firebase.initializeApp(config);

const database = firebase.database();

export const storageRef = firebase.storage();

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();


export { firebase, database as default };

/*
console.log("ok")
let data;
let f = (data) => {
    Object.keys(data).forEach((key) => {
        let obj = {}
        try{
            Object.keys(data[key]["data"]).forEach((date) => {
                let dates = date.split(":")
                let newDate = dates[2]+dates[1]+dates[0]
                obj[newDate] = data[key]["data"][date]
            })
        }catch{}
        console.log(obj)
        database.ref(`users/${key}/data/`).update(obj);
    })
}
firebase.database().ref("users").once("value").then((snapshot)=>{
    if(snapshot.val()){
        data = snapshot.val()
        window.datas = data

        f(data)
    }
})*/