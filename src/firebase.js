// For Firebase JS SDK v7.20.0 and later, measurementId is optional

  import firebase from "firebase";
  const firebaseConfig = {
    apiKey: "AIzaSyDqWW5vdYqdQKhm7tieWaG2UMnBlh4kfPU",
    authDomain: "todo-app-219c4.firebaseapp.com",
    databaseURL: "https://todo-app-219c4.firebaseio.com",
    projectId: "todo-app-219c4",
    storageBucket: "todo-app-219c4.appspot.com",
    messagingSenderId: "434026483262",
    appId: "1:434026483262:web:4338f5edd3bc14560ecb6f",
    measurementId: "G-NVN9GNYF24"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  export default db;