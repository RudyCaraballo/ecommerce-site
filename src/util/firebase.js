import {initializeApp} from 'firebase/app'
import * as dotenv from 'dotenv' 
dotenv.config({path: '../../.env'})

 
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


