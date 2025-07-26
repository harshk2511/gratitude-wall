import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "gratitude-wall-f3220.firebaseapp.com",
  projectId: "gratitude-wall-f3220",
  storageBucket: "gratitude-wall-f3220.firebasestorage.app",
  messagingSenderId: "219508431826",
  appId: "1:219508431826:web:fbda410114d0231280860b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Authentication
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Selecting elements
const googleSigninBtn = document.getElementById("google-signin-btn");

googleSigninBtn.addEventListener("click", function() {
    signInWithPopup(auth, provider)
    .then((result) => {
        const userObj = result.user;
        console.log(userObj.displayName)
        console.log(userObj.email)
    })
    .catch((error) => {
        console.log(error)
    })
})
