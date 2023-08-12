import {initializeApp} from "firebase/app";
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyClS2pb7Aj0NLCaYcE1SV3tVnXzfXCQrxA",
    authDomain: "todolist-2b464.firebaseapp.com",
    projectId: "todolist-2b464",
    storageBucket: "todolist-2b464.appspot.com",
    messagingSenderId: "995729673641",
    appId: "1:995729673641:web:78a6cfa0f46f01e95908b8",
    databaseURL: "https://todolist-2b464-default-rtdb.europe-west1.firebasedatabase.app/"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);