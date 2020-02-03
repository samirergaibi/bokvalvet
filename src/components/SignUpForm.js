/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState } from "react";
import { navigate } from "@reach/router";

import firebase from "./Firebase";
import validateName from "../utils/validateName";
import validateEmail from "../utils/validateEmail";
import validatePassword from "../utils/validatePassword";
import Input from "./Input";
import ErrorMsg from "./ErrorMsg";
import PrimaryButton from "./PrimaryButton";

const SignUpForm = () => {
  const [firstnameInput, setFirstnameInput] = useState("");
  const [lastnameInput, setLastnameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [repeatPasswordInput, setRepeatPasswordInput] = useState("");
  const [errorMsg, setErrorMsg] = useState();

  function handleFirstname(e) {
    setFirstnameInput(e.target.value);
  }
  function handleLastname(e) {
    setLastnameInput(e.target.value);
  }
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
    if (!validateName(firstnameInput)) {
      setErrorMsg("Ogiltigt förnamn.");
    } else if (!validateName(lastnameInput)) {
      setErrorMsg("Ogiltigt efternamn.");
    } else if (!validateEmail(emailInput)) {
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
        .then(() => {
          const user = firebase.auth().currentUser;
          const actionCodeSettings = {
            url: `http://localhost:3000/konto`
          };
          user.sendEmailVerification(actionCodeSettings);
          if (user) {
            const colors = [
              "1abc9c",
              "f1c40f",
              "2980b9",
              "8e44ad",
              "d870ad",
              "b49255",
              "f39c12"
            ];
            const randomColor =
              colors[Math.floor(Math.random() * colors.length)];
            user
              .updateProfile({
                displayName: `${firstnameInput} ${lastnameInput}`,
                photoURL: `https://eu.ui-avatars.com/api/?name=${firstnameInput}+${lastnameInput}&background=${randomColor}&color=fff&rounded=true&size=300`
              })
              .then(() => {
                navigate("/konto");
              })
              .catch(err => {
                console.log(err);
              });
          }
        })
        .catch(err => {
          console.log(err);
          setErrorMsg("Någonting gick fel, var god och försök igen.");
        });
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
        value={firstnameInput}
        onChange={handleFirstname}
        placeholder="Förnamn"
      />
      <Input
        type="text"
        value={lastnameInput}
        onChange={handleLastname}
        placeholder="Efternamn"
      />
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
      <PrimaryButton type="submit">Skapa konto</PrimaryButton>
      <ErrorMsg msg={errorMsg} />
    </form>
  );
};

export default SignUpForm;
