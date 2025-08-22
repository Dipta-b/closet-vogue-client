// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1oCSyoeuDvSpTeaW6ItEdAsrwwF5_WIo",
  authDomain: "closet-vogue.firebaseapp.com",
  projectId: "closet-vogue",
  storageBucket: "closet-vogue.firebasestorage.app",
  messagingSenderId: "965281567758",
  appId: "1:965281567758:web:de4c220bd1adadc627d85f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;