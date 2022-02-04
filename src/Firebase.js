import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBmK4eZ2pOFiott6kq9wckQlSrs8lNkW40",
    authDomain: "test-cfec6.firebaseapp.com",
    projectId: "test-cfec6",
    storageBucket: "test-cfec6.appspot.com",
    messagingSenderId: "1022532599517",
    appId: "1:1022532599517:web:ae5e843019a4d885432534"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);