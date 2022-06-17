// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getStorage} from "firebase/storage"
import { getFirestore } from "firebase/firestore"; 
import "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrg_s4DO9rMRazO-t_suh7G-SCRes38as",
  authDomain: "tkwlssoshk-5584e.firebaseapp.com",
  projectId: "tkwlssoshk-5584e",
  storageBucket: "tkwlssoshk-5584e.appspot.com",
  messagingSenderId: "967405348466",
  appId: "1:967405348466:web:edbeb6fea20d218d31c4eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;