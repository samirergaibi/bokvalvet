/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState } from "react";

import Input from "../components/Input";
import PrimaryButton from "../components/PrimaryButton";
import firebase from "../components/Firebase";
import validateEmail from "../utils/validateEmail";
import ErrorMsg from "../components/ErrorMsg";
import ValidationMsg from "../components/ValidationMsg";

const ForgotPassword = () => {
  const [emailInput, setEmailInput] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  function resetPassword(e) {
    e.preventDefault();
    if (validateEmail(emailInput)) {
      firebase
        .auth()
        .sendPasswordResetEmail(emailInput)
        .then(() => {
          setErrorMsg("");
          setEmailSent(true);
          setEmailInput("");
        })
        .catch(err => {
          console.log("Error resetting password: ", err);
        });
    } else {
      setErrorMsg("Felaktig epost-adress");
    }
  }
  return (
    <div
      css={{
        textAlign: "center"
      }}
    >
      <h1>Glömt lösenord</h1>
      <div
        css={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <form onSubmit={resetPassword}>
          <Input
            placeholder="Epost-adress"
            css={{ width: "100%" }}
            onChange={e => {
              setEmailInput(e.target.value);
            }}
            value={emailInput}
          />
          <PrimaryButton type="submit">Återställ lösenord</PrimaryButton>
          <ErrorMsg msg={errorMsg} />
        </form>
      </div>
      {emailSent && (
        <ValidationMsg msg="Mejl för återställning av lösenord har skickats till din epost-adress" />
      )}
    </div>
  );
};

export default ForgotPassword;
