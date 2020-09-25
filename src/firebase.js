

  import firebase from 'firebase';

  const firebaseApp = firebase.initializeApp({
   
        apiKey: "AIzaSyDEt3HHzSt9OsKe7Uuz9bz1ls9I8Rzb-VQ",
        authDomain: "todoapp-ddc0d.firebaseapp.com",
        databaseURL: "https://todoapp-ddc0d.firebaseio.com",
        projectId: "todoapp-ddc0d",
        storageBucket: "todoapp-ddc0d.appspot.com",
        messagingSenderId: "417591593140",
        appId: "1:417591593140:web:30800a661141b8f5c3afe1",
        measurementId: "G-3LM92ETG7Q"
     
  });

  const db = firebaseApp.firestore();

  export default db;
