import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDAFzw4B2gnnXK9fv_AOE-qATIYdZ-IKB4",
  authDomain: "warmasters-paradise.firebaseapp.com",
  projectId: "warmasters-paradise",
  storageBucket: "warmasters-paradise.appspot.com",
  messagingSenderId: "192108180189",
  appId: "1:192108180189:web:8defdccc69870b6050e134"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore()

export default db