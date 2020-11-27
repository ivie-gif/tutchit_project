import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firebase-storage'





let firebaseConfig = {
    apiKey: "AIzaSyAYPfP5m3RtFb5aAo43cdM3m1vKIM6bEgQ",
    authDomain: "fir-web-app-8bfb2.firebaseapp.com",
    databaseURL: "https://fir-web-app-8bfb2.firebaseio.com",
    projectId: "fir-web-app-8bfb2",
    storageBucket: "fir-web-app-8bfb2.appspot.com",
    messagingSenderId: "1010108195124",
    appId: "1:1010108195124:web:1ad342261df60281050561"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth ();

  export const firestore = firebase.firestore ();

  export const provider = new firebase.auth.GoogleAuthProvider();