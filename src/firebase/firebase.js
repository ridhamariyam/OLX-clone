import {initializeApp} from  "firebase/app";
import {getFirestore} from "firebase/firestore";
import 'firebase/auth'
import 'firebase/compat/firestore';
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAkmshMQ2wi3zZJtCgnXpTOZuAJeFXJUc4",
  authDomain: "olx-clone-684b6.firebaseapp.com",
  projectId: "olx-clone-684b6",
  storageBucket: "olx-clone-684b6.appspot.com",
  messagingSenderId: "312695031796",
  appId: "1:312695031796:web:b162fbafd06fea2b12dba1",
  measurementId: "G-HFCT03NM5V"
  };


  export const Firebaseapp =initializeApp(firebaseConfig)
  export const storage =getStorage(Firebaseapp)
  export const db =getFirestore(Firebaseapp)