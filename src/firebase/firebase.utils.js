import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyB4vOYDhwWwduAHPIKWt-59Mk1la1VoviQ',
  authDomain: 'crwn-db-47078.firebaseapp.com',
  projectId: 'crwn-db-47078',
  storageBucket: 'crwn-db-47078.appspot.com',
  messagingSenderId: '743574963931',
  appId: '1:743574963931:web:308256acdfa7c065e56efe',
  measurementId: 'G-5Y2Z80S1NM',
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
