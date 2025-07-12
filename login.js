// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

//  Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDax71N4RUx1WsiImBifT6XhOArqT8fNO4",
  authDomain: "smartmed-43310.firebaseapp.com",
  projectId: "smartmed-43310",
  storageBucket: "smartmed-43310.firebasestorage.app",
  messagingSenderId: "170421645170",
  appId: "1:170421645170:web:2cf724db6f30eba330f7eb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign Up Function
window.signup = function () {
  const name = document.getElementById("signup-name").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      return updateProfile(userCredential.user, { displayName: name });
    })
    .then(() => {
      window.location.href = "content.html";
    })
    .catch((error) => {
      alert(error.message);
    });
};

// Login Function
window.login = function () {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "content.html";
    })
    .catch((error) => {
      alert(error.message);
    });
};
