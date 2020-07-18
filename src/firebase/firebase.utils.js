import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCFI0gNPEjLaDjKuWpSAVAir9syfLhlEYg",
    authDomain: "crown-db-db610.firebaseapp.com",
    databaseURL: "https://crown-db-db610.firebaseio.com",
    projectId: "crown-db-db610",
    storageBucket: "crown-db-db610.appspot.com",
    messagingSenderId: "26529913198",
    appId: "1:26529913198:web:ef1d7fd33214eb6dc5897f",
    measurementId: "G-9W3G1DVMVP"
  }

  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };

  //function to push data to the firestore
export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);
  const batch = firestore.batch();
  objectToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
}

export const convertCollecitionsSnapshotToMap = (collections) => {
    const transformedCollecitons = collections.docs.map(doc =>{
      const {title, items } = doc.data();

      return {
        routeName: encodeURI(title.toLowerCase()),
        id:doc.id,
        title,
        items
      }
    });

    return transformedCollecitons.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;