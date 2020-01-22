/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState } from "react";
import { navigate } from "@reach/router";

import firebase from "../setupFirebase";
import validateEmail from "../utils/validateEmail";
import validatePassword from "../utils/validatePassword";

const SignInForm = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [errorMsg, setErrorMsg] = useState();

  function handleEmail(e) {
    setEmailInput(e.target.value);
  }
  function handlePassword(e) {
    setPasswordInput(e.target.value);
  }
  function loginUser(e) {
    e.preventDefault();
    if (!validateEmail(emailInput)) {
      setErrorMsg("Ogiltig e-postadress. ex. exempel@mail.se");
    } else if (!validatePassword(passwordInput)) {
      setErrorMsg(
        "Ogiltigt lösenord, lösenordet måste bestå av minst 6 tecken."
      );
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(emailInput, passwordInput)
        .then(resp => {
          navigate("/mitt-konto")
        })
        .catch(err => {
          console.log(err);
          switch (err.code) {
            case "auth/invalid-email":
              setErrorMsg("Ogiltig e-postadress.");
              break;
            case "auth/user-disabled":
              setErrorMsg("Kontot är avstängt.");
              break;
            case "auth/user-not-found":
              setErrorMsg("Kontot exiterar inte.");
              break;
            case "auth/wrong-password":
              setErrorMsg("Lösenordet som du angett är fel.");
              break;
            default:
              setErrorMsg(
                "Ett oväntat fel har inträffat, var god försök igen."
              );
              break;
          }
        });
    }
  }

  return (
    <form onSubmit={loginUser}>
      <input
        type="text"
        value={emailInput}
        onChange={handleEmail}
        placeholder="E-postadress"
      />
      <input
        type="text"
        value={passwordInput}
        onChange={handlePassword}
        placeholder="Lösenord"
      />
      <button type="submit">Logga In</button>
      {errorMsg && (
        <p
          css={{
            textAlign: "center",
            backgroundColor: "#fee9ed",
            color: "#df5a71",
            padding: "15px 0"
          }}
        >
          {errorMsg}
        </p>
      )}
    </form>
  );
};

export default SignInForm;
