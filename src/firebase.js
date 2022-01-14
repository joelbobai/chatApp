// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "./firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD74RzNMN8n5wX6FCg4QEFC2kPeqKwYTog",
  authDomain: "joelbox-10f40.firebaseapp.com",
  projectId: "joelbox-10f40",
  storageBucket: "joelbox-10f40.appspot.com",
  messagingSenderId: "1014893478644",
  appId: "1:1014893478644:web:f30330a4ee94827e9d54a1",
  measurementId: "G-2WSR7TG2GE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };

export default firebaseApp