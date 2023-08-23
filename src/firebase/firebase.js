import {initializeApp} from  "firebase/app";
import {getFirestore} from "firebase/firestore";
import 'firebase/auth'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDV3-oVBXchdC8kG-NN-a-PghCC0TfjHco",
    authDomain: "olx-demo-74805.firebaseapp.com",
    projectId: "olx-demo-74805",
    storageBucket: "olx-demo-74805.appspot.com",
    messagingSenderId: "819354929052",
    appId: "1:819354929052:web:baf3c74fcdc15a915eea59",
    measurementId: "G-C9YR2F8K4G"
  };


  export const Firebaseapp =initializeApp(firebaseConfig)
  export const storage =getStorage(Firebaseapp)
  export const db =getFirestore(Firebaseapp)