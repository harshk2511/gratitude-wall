import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Authentication
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Selecting elements
const googleSigninBtn = document.getElementById("google-signin-btn");
const ssButtonsDiv = document.getElementById("small-screens-btn-div");

// Google sign in
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

// Mobile Devices Display
console.log(window.innerWidth);
console.log(window.innerHeight);

if (window.innerWidth >= 1024) {
    ssButtonsDiv.style.display = "none";
}