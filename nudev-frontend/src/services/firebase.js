import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.local.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.local.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.local.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.local.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.local.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.local.REACT_APP_FIREBASE_APP_ID,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebaseApp.auth();
