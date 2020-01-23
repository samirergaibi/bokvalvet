/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState } from "react";

import firebase from "./Firebase";
import validateEmail from "../utils/validateEmail";
import validatePassword from "../utils/validatePassword";
import Input from "./Input";
import ErrorMsg from "./ErrorMsg";
import SubmitButton from "./SubmitButton";

const SignUpForm = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [repeatPasswordInput, setRepeatPasswordInput] = useState("");
  const [errorMsg, setErrorMsg] = useState();

  function handleEmail(e) {
    setEmailInput(e.target.value);
  }
  function handlePassword(e) {
    setPasswordInput(e.target.value);
  }
  function handleRepeatPassword(e) {
    setRepeatPasswordInput(e.target.value);
  }
  function signUp(e) {
    e.preventDefault();
    if (!validateEmail(emailInput)) {
      setErrorMsg("Ogiltig e-postadress.");
    } else if (
      !validatePassword(passwordInput) &&
      !validatePassword(repeatPasswordInput)
    ) {
      setErrorMsg("Lösenordet måste bestå av minst sex tecken.");
    } else if (passwordInput !== repeatPasswordInput) {
      setErrorMsg("De angivna lösenorden stämmer inte överens.");
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(emailInput, passwordInput)
        .catch(err => {
          console.log(err);
          setErrorMsg("Någonting gick fel, var god och försök igen.");
        });
      console.log("Konto har skapats!");
    }
  }
  return (
    <form
      onSubmit={signUp}
      css={{
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Input
        type="text"
        value={emailInput}
        onChange={handleEmail}
        placeholder="E-postadress"
      />
      <Input
        type="password"
        value={passwordInput}
        onChange={handlePassword}
        placeholder="Lösenord"
      />
      <Input
        type="password"
        value={repeatPasswordInput}
        onChange={handleRepeatPassword}
        placeholder="Upprepa Lösenord"
      />
      <SubmitButton text="Skapa Konto" />
      <ErrorMsg msg={errorMsg} />
    </form>
  );
};

export default SignUpForm;
