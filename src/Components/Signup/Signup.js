import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../../store/firebaseContext';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {collection, addDoc} from 'firebase/firestore'
import Logo from '../../olx-logo.png';
import './Signup.css';


export default function Signup() {

  const [ username, setUsername ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ mobile, setMobile ] = useState('')

  const { firebase, db,   } = useContext(FirebaseContext)
  const handleSubmit = async (e) => {
    e.preventDefault()
    try{

      const auth = getAuth(firebase)
      const  userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      await updateProfile(user,{ displayName : username })
      const usersCollection = collection(db, 'users');
      await addDoc(usersCollection(db,'users'),{
        id : user.uid,
        username : username,
        email : email,
        password : password,
        mobile : mobile
      })
    }catch(error) {
      console.log(error.message);
    }
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            
            onChange={(e) => setMobile(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
