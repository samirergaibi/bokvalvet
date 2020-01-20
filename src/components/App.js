import React, { useState, useEffect } from 'react';
import { Router } from "@reach/router";

import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import About from "../pages/About";
import { UserContext } from "./AuthContext";
import firebase from "../setupFirebase";

function App() {

  const [user, setUser] = useState({});
  const [authRespReceived, setAuthRespReceived] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        setUser(user);
      } else {
        console.log("USER IS NOT LOGGED IN");
        setUser(user);
      }
      setAuthRespReceived(true);
    })
  }, []);

  return (
    <UserContext.Provider value={{authRespReceived, user}}>
      <Router>
        <Home path="/" />
        <SignUp path="/skapa-konto" />
        <About path="/om-bokvalvet" />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
