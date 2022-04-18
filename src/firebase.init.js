// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCymQWs_XGi90OVSmD-pCwzfcTlvE-fNkA",
  authDomain: "trip-advisor-5c1fe.firebaseapp.com",
  projectId: "trip-advisor-5c1fe",
  storageBucket: "trip-advisor-5c1fe.appspot.com",
  messagingSenderId: "902094344025",
  appId: "1:902094344025:web:f288b7548836f784bbc648"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;