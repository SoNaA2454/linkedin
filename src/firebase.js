import firebase from "firebase"

const firebaseConfig = {
 //place your firebase config here
 apiKey: "AIzaSyA2eLrabhOQsAi3ajn2bdw6c1uDBUuQRUk",
 authDomain: "linkedin-clone-ef360.firebaseapp.com",
 projectId: "linkedin-clone-ef360",
 storageBucket: "linkedin-clone-ef360.appspot.com",
 messagingSenderId: "1082032854765",
 appId: "1:1082032854765:web:dfd699b6a2fe5ba9bb5ee4"
};

  //This special line of code here connects everything
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  //gets the firestore database
  const db = firebaseApp.firestore();

  //we want to use firebase authentication
  const auth = firebase.auth();
  export { db, auth}