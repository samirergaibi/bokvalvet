/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState, useEffect } from "react";
import { Router } from "@reach/router";

import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import About from "../pages/About";
import { AuthContext } from "./AuthContext";
import firebase from "../setupFirebase";
import Layout from "./Layout";

function App() {
  const [user, setUser] = useState({});
  const [authRespReceived, setAuthRespReceived] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        console.log("USER IS NOT LOGGED IN");
        setUser(user);
      }
      setAuthRespReceived(true);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ authRespReceived, user }}>
      <Layout>
        <Router>
          <Home path="/" />
          <SignUp path="/skapa-konto" />
          <About path="/om-bokvalvet" />
        </Router>
      </Layout>
    </AuthContext.Provider>
  );
}

export default App;
