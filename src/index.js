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
const ssLoginBtn = document.getElementById("login-ss-btn");
const ssSignUpBtn = document.getElementById("signup-ss-btn");
const loginDiv = document.querySelector(".login-div");
const signUpDiv = document.querySelector(".signup-div");

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

window.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth < 768) {
    // On small screens: only show login, hide signup and show toggle buttons
    loginDiv.style.display = "flex";
    signUpDiv.style.display = "none";
    ssButtonsDiv.style.display = "flex";

    // Style the buttons correctly
    ssLoginBtn.style.backgroundColor = "#E6B2BA";
    ssLoginBtn.style.color = "white";
    ssSignUpBtn.style.backgroundColor = "white";
    ssSignUpBtn.style.color = "#E6B2BA";
  } else {
    // On large screens: show both blocks and hide toggle buttons
    loginDiv.style.display = "flex";
    signUpDiv.style.display = "flex";
    ssButtonsDiv.style.display = "none";
  }
})

ssLoginBtn.addEventListener("click", function() {
    loginDiv.style.display = "flex";
    signUpDiv.style.display = "none";
    ssSignUpBtn.style.backgroundColor = "white";
    ssSignUpBtn.style.color= "#E6B2BA";
    ssLoginBtn.style.backgroundColor = "#E6B2BA";
    ssLoginBtn.style.color= "white";
})

ssSignUpBtn.addEventListener("click", function() {
    signUpDiv.style.display = "flex";
    loginDiv.style.display = "none";
    ssLoginBtn.style.backgroundColor = "white";
    ssLoginBtn.style.color= "#E6B2BA";
    ssSignUpBtn.style.backgroundColor = "#E6B2BA";
    ssSignUpBtn.style.color= "white";
})