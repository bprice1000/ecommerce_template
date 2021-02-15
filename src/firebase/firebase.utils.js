import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyCRTvrIxSqm1yPubMlJNE0Gzl13apFQ9Fk",
    authDomain: "ecom-temp-db.firebaseapp.com",
    projectId: "ecom-temp-db",
    storageBucket: "ecom-temp-db.appspot.com",
    messagingSenderId: "608888231943",
    appId: "1:608888231943:web:9a2532dd10b191d6a172a2",
    measurementId: "G-W858YRKWCL"
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
