import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import {  getFirestore, collection, addDoc, getDocs, onSnapshot } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAcwwYl1-HkZKNYlA_RdLg3JsB9kJN9Fmg",
    authDomain: "pruebachat-9515b.firebaseapp.com",
    projectId: "pruebachat-9515b",
    storageBucket: "pruebachat-9515b.appspot.com",
    messagingSenderId: "799826715129",
    appId: "1:799826715129:web:906df3a2f25d32f4bd5d28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()


export const saveTask = (title) => {
    addDoc(collection(db, 'tasks'), {title})
}

export const getTasks = () => getDocs(collection(db, "tasks"));

export const onGetTasks = (callback) => onSnapshot(collection(db, 'tasks'), callback)

export{
    onSnapshot,
    collection,
    db
}