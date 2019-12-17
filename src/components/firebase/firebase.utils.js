import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDX2bQravJs0_icvG05g62sH8hOfYuedts",
  authDomain: "crown-db-e6d81.firebaseapp.com",
  databaseURL: "https://crown-db-e6d81.firebaseio.com",
  projectId: "crown-db-e6d81",
  storageBucket: "crown-db-e6d81.appspot.com",
  messagingSenderId: "1034232077450",
  appId: "1:1034232077450:web:41160dc10be583c0cf6173",
  measurementId: "G-NJQTMF1F52"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
