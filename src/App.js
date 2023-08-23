import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useContext } from "react";

import Home from "./Pages/Home";
import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
import Create from './Pages/Create';
import View from './Pages/ViewPost'
import { AuthContext, FirebaseContext } from './store/firebaseContext';
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {

  const {setUser}=useContext(AuthContext)
  const{Firebaseapp}=useContext(FirebaseContext)

  useEffect(()=>{
    const auth = getAuth(Firebaseapp);
    onAuthStateChanged(auth, (user) => {
    setUser(user)
  });
})
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/create" element={<Create/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
