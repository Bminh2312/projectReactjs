import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDyGL6W6XOcr3xMJobfv7-P1CKtm0iTtqQ",
  authDomain: "movieproject-1ba36.firebaseapp.com",
  projectId: "movieproject-1ba36",
  storageBucket: "movieproject-1ba36.appspot.com",
  messagingSenderId: "53022560693",
  appId: "1:53022560693:web:0a68a7731fbedc49ca49fc",
  measurementId: "G-ZYWLX9ER26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export{auth,provider}
