import firebase from 'firebase/app';
import 'firebase/auth';
var firebaseConfig = {
    apiKey: "AIzaSyDXf0Xh_pnqIS3knpQeDD0fMnZ0LmD-V24",
    authDomain: "authurl.firebaseapp.com",
    projectId: "authurl",
    storageBucket: "authurl.appspot.com",
    messagingSenderId: "860888935488",
    appId: "1:860888935488:web:a1f861959399d6aff143a5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var auth = firebase.auth();
  var providerGithub = new firebase.auth.GithubAuthProvider(); 
  var providerGoogle = new firebase.auth.GoogleAuthProvider();
  export {auth , providerGithub , providerGoogle};
