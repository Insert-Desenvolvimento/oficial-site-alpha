import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAhG0upmyfuKLUx218hOUALr0iD2OecROI",
  authDomain: "alpha-academia-firebase.firebaseapp.com",
  projectId: "alpha-academia-firebase",
  storageBucket: "alpha-academia-firebase.appspot.com",
  messagingSenderId: "1019555493316",
  appId: "1:1019555493316:web:d63a8a62096641c3b5e091",
  measurementId: "G-2DPX1BY408",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
