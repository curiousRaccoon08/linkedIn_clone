import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCW4cWcpbH0Rc6ipCscOlxJOmzN9GuBy64",
    authDomain: "linkedin-clone-26ad2.firebaseapp.com",
    projectId: "linkedin-clone-26ad2",
    storageBucket: "linkedin-clone-26ad2.appspot.com",
    messagingSenderId: "421177211859",
    appId: "1:421177211859:web:6d950c56adee73a8ae4d26",
};

const firebaseApp = firebase.inititalizeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
