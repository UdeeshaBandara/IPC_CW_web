import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCt0FHzNyTMzZTiiwuExEdiAZJaglemF7Q",
  authDomain: "ipc-cw-ad530.firebaseapp.com",
  projectId: "ipc-cw-ad530",
  storageBucket: "ipc-cw-ad530.appspot.com",
  messagingSenderId: "619505609683",
  appId: "1:619505609683:web:8eb6181c65d1505eec5d26",
  measurementId: "G-5X09BVMBTN",
};
// Initialize Firebase

export const firebaseApp = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
