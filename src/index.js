import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {Firebaseapp} from "./firebase/firebase";
import { FirebaseContext } from "./store/firebaseContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ Firebaseapp }} >
      <App />
    </FirebaseContext.Provider >
  </React.StrictMode>
);
