import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDf-z7B0zHLgqC19lqkggLKsXC1wkszvDU",
    authDomain: "petite-auth-49202.firebaseapp.com",
    databaseURL: "https://petite-auth-49202.firebaseio.com",
    projectId: "petite-auth-49202",
    storageBucket: "petite-auth-49202.appspot.com",
    messagingSenderId: "313475721331",
    appId: "1:313475721331:web:d882eb9823aa47998be206",
    measurementId: "G-CQD4EMV0NB"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set ({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;