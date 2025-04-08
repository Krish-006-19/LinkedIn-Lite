import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA6MHQUcQy3mQuPjp0e7vZx1fBQpQfiknI",
    authDomain: "linkedin-clone-ef70f.firebaseapp.com",
    projectId: "linkedin-clone-ef70f",
    storageBucket: "linkedin-clone-ef70f.firebasestorage.app",
    messagingSenderId: "542317234329",
    appId: "1:542317234329:web:da73f08c31bc423b62d008"
  }

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)
  const auth = getAuth(app)
  const provider = new GoogleAuthProvider()
  export { db, auth, provider }