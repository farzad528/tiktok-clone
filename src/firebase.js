import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDB_zYv7qAHmhOxnIyW3f9oKU_DZfMliSc",
  authDomain: "tiktok-clone-b9db0.firebaseapp.com",
  databaseURL: "https://tiktok-clone-b9db0.firebaseio.com",
  projectId: "tiktok-clone-b9db0",
  storageBucket: "tiktok-clone-b9db0.appspot.com",
  messagingSenderId: "540487709540",
  appId: "1:540487709540:web:f487fcff1558ba55744071",
  measurementId: "G-JT3PJL0WPZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
