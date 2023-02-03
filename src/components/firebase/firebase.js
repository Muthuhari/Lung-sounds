import { getApp, initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth"; 


const firebaseConfig = {
  apiKey: "AIzaSyD9ehFPKbDyWku3XLGPvjUfI-r8_glHs8M",
  authDomain: "lung-project-6dd24.firebaseapp.com",
  projectId: "lung-project-6dd24",
  storageBucket: "lung-project-6dd24.appspot.com",
  messagingSenderId: "306994729305",
  appId: "1:306994729305:web:43c4d3fe8e50f6c79b7c48",
  measurementId: "G-33RV97CB89"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

export function signup(email,password){
  return createUserWithEmailAndPassword(auth, email,password);
}