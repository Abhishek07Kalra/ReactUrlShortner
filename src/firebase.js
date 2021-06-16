import firebase from 'firebase/app';
import 'firebase/auth';
var firebaseConfig = {
    
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var auth = firebase.auth();
  var providerGithub = new firebase.auth.GithubAuthProvider(); 
  var providerGoogle = new firebase.auth.GoogleAuthProvider();
  export {auth , providerGithub , providerGoogle};
