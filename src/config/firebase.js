import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyDEpxNy56sjw9WjNyco864Ts6Q6x3Sz5VQ",
  authDomain: "tiktok-clone-6b92c.firebaseapp.com",
  projectId: "tiktok-clone-6b92c",
  storageBucket: "tiktok-clone-6b92c.appspot.com",
  messagingSenderId: "369043929135",
  appId: "1:369043929135:web:aba7d522cba9f07933aeda"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;