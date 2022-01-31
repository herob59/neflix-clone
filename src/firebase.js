// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD1OCHYuNR9UUSmuI3KMHhegd6n8vohJqA",
    authDomain: "netflix-clone-2cb63.firebaseapp.com",
    projectId: "netflix-clone-2cb63",
    storageBucket: "netflix-clone-2cb63.appspot.com",
    messagingSenderId: "737451476920",
    appId: "1:737451476920:web:1988c0fa30c8e97232b14d",
    measurementId: "G-25FDXYVQPJ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export { auth };
  export default db;