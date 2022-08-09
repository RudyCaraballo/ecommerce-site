import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

//data that you're getting from the authentication provider
//storing it inside of firestore
export const createUserDoc = async (userAuth) => {
  const userDocument = doc(db, "users", userAuth.uid);
  const userData = await getDoc(userDocument);

  if (!userData.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date()

    try {
      await setDoc(userDocument, {
        displayName,
        email,
        createdAt,
      });
      console.log("set document successfully");
    } catch (error) {
      console.log(error)
    }
  }
  return userDocument
};
