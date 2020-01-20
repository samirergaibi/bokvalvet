/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState } from "react";

import firebase from "../setupFirebase";

const SignInForm = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmail(e){
    setEmail(e.target.value);
  }
  function handlePassword(e){
    setPassword(e.target.value);
  }
  function loginUser(e){
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password).catch(err => console.log(err));
  }

  return (
    <form onSubmit={loginUser}>
      <input type="text" value={email} onChange={handleEmail} placeholder="E-postadress" />
      <input type="text" value={password} onChange={handlePassword} placeholder="Lösenord" />
      <button type="submit" >Logga In</button>
    </form>
  );
}

export default SignInForm;