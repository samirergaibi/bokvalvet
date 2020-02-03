/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState, useEffect } from "react";
import { Router } from "@reach/router";

import "../setupIconLibrary";
import Home from "../pages/Home";
import About from "../pages/About";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import firebase, { FirebaseContext } from "./Firebase";
import Layout from "./Layout";
import Account from "../pages/Account";
import Book from "../pages/Book";
import BookVault from "../pages/BookVault";
import VerifyEmail from "../pages/VerifyEmail";

function App() {
  const [user, setUser] = useState(null);
  const [authRespReceived, setAuthRespReceived] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
      setAuthRespReceived(true);
    });
  }, []);

  return (
    <FirebaseContext.Provider value={{ authRespReceived, user }}>
      <Layout>
        <Router>
          <Home path="/" />
          <SignUp path="/skapa-konto" />
          <About path="/om-bokvalvet" />
          <Login path="/logga-in" />
          <Account path="/konto" />
          <Book path="/bok/:id" />
          <BookVault path="/bokvalv" />
          <VerifyEmail path="/verifiera-epost-adress" />
        </Router>
      </Layout>
    </FirebaseContext.Provider>
  );
}

export default App;
