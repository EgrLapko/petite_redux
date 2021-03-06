import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { Promise } from 'q';

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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
};

export const convertCollectionsSnapshotsToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items, route } = doc.data();
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items,
            route
        }
    });
    
    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.route.toLowerCase()] = collection;
        return accumulator;
    }, {})
}

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject)
    })
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;