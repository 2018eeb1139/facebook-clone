import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDnUs4LXvOFXxzncXM4GH3L0y410M0oUIQ",
    authDomain: "facebook-messenger-clone-fac3c.firebaseapp.com",
    projectId: "facebook-messenger-clone-fac3c",
    storageBucket: "facebook-messenger-clone-fac3c.appspot.com",
    messagingSenderId: "79056878317",
    appId: "1:79056878317:web:b2bd033c14ef771f7e2ae4",
    measurementId: "G-ZQLPEEFJJW"
}

const firebaseApp=firebase.initializeApp(firebaseConfig)

const db=firebaseApp.firestore();

export default db;