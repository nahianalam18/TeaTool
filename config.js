var firebaseConfig = {
  apiKey: "AIzaSyAErwVVVBiJFicBNKlFjpsqtcHL6u3_WbI",
  authDomain: "teatool.firebaseapp.com",
  databaseURL: "https://teatool.firebaseio.com",
  projectId: "teatool",
  storageBucket: "teatool.appspot.com",
  messagingSenderId: "1018393120206",
  appId: "1:1018393120206:web:ec49980efd82a0c0596f9f",
  measurementId: "G-VZ4ZBBL30E"
};
import * as firebase from "firebase";

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
