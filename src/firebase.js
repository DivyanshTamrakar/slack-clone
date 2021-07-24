import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCUdZJbWFXv34M_vLN5gepiVR9tdEtvr8w",
    authDomain: "slack-clone-react-941f5.firebaseapp.com",
    projectId: "slack-clone-react-941f5",
    storageBucket: "slack-clone-react-941f5.appspot.com",
    messagingSenderId: "1053224341094",
    appId: "1:1053224341094:web:455fb628b0e53bf96167a7",
    measurementId: "G-YXFDCKPQH2"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  export const provider = new firebase.auth.GoogleAuthProvider();