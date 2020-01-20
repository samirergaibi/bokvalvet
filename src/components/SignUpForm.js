/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState } from "react";

import firebase from "../setupFirebase";

import validateEmail from "../utils/validateEmail";
import validatePassword from "../utils/validatePassword";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  function signUp(e) {
    e.preventDefault();
    if (!validateEmail(email)) {
      console.log("Ogiltig e-postadress.");
    } else if (!validatePassword(password)) {
      console.log("Lösenorder måste bestå av minst sex tecken.");
    } else {
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(err => {
        console.log(err);
        console.log("Någonting gick fel, var god och försök igen.");
      })
      console.log("Konto har skapats!");
    }
  }
  return (
    <form onSubmit={signUp}>
      <input
        type="text"
        id="email"
        value={email}
        onChange={handleEmail}
        placeholder="E-post"
        autoComplete="off"
      />
      <input
        type="text"
        id="password"
        value={password}
        onChange={handlePassword}
        placeholder="Lösenord"
      />
      <button type="submit">Skapa Konto</button>
    </form>
  );
};

export default SignUpForm;
