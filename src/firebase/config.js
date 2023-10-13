import {initializeApp} from 'firebase/app';
import {getFirestore, collection} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBBpvXYbcuRrAVrauUFl50VyxmqkMihwZs",
    authDomain: "champions-7ea08.firebaseapp.com",
    projectId: "champions-7ea08",
    storageBucket: "champions-7ea08.appspot.com",
    messagingSenderId: "6196007885",
    appId: "1:6196007885:web:88137e90ce548423"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const userRef = collection(db, "users");

export { db, auth , userRef}
