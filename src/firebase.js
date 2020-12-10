import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAI3Z7fCAqCJFfzDE2P2DpVs_aKDxggZ5s",
  authDomain: "messenger-fb2020.firebaseapp.com",
  databaseURL: "https://messenger-fb2020.firebaseio.com",
  projectId: "messenger-fb2020",
  storageBucket: "messenger-fb2020.appspot.com",
  messagingSenderId: "921294938356",
  appId: "1:921294938356:web:12d75816d21795b42cfea1",
  measurementId: "G-J8ENWQN0S4"
}
);


const db = firebaseApp.firestore();
export default db;