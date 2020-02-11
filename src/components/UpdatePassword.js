/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useContext, useState } from "react";

import Input from "./Input";
import PrimaryButton from "./PrimaryButton";
import firebase, { FirebaseContext } from "./Firebase";
import ErrorMsg from "./ErrorMsg";
import validatePassword from "../utils/validatePassword";
import ValidationMsg from "./ValidationMsg";

const UpdatePassword = () => {
  const [currentPass, setCurrentPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [repeatNewPass, setRepeatNewPass] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [validationMsg, setValidationMsg] = useState("");
  const { user } = useContext(FirebaseContext);

  function changePassword(e) {
    e.preventDefault();
    if (validatePassword(newPass)) {
      if (newPass === repeatNewPass) {
        const credential = firebase.auth.EmailAuthProvider.credential(
          user.email,
          currentPass
        );
        firebase
          .auth()
          .currentUser.reauthenticateWithCredential(credential)
          .then(() => {
            const user = firebase.auth().currentUser;
            setCurrentPass("");
            setNewPass("");
            setRepeatNewPass("");
            user
              .updatePassword(newPass)
              .then(() => {
                setErrorMsg(null);
                setValidationMsg("Lösenordet har ändrats");
              })
              .catch(err => {
                setErrorMsg("Någonting oväntat gick fel, försök igen");
              });
          })
          .catch(err => {
            if (err.code === "auth/wrong-password") {
              setErrorMsg("Du angav fel lösenord");
            } else {
              setErrorMsg("Någonting gick fel, försök igen");
            }
          });
      } else {
        setErrorMsg("De nya lösenorden matchar inte varandra");
      }
    } else {
      setErrorMsg("Det nya lösenorder måste bestå av minst 6 tecken");
    }
  }
  return (
    <div
      css={{
        boxShadow:
          "0 1px 1px rgba(0,0,0,0.11), 0 2px 2px rgba(0,0,0,0.11), 0 4px 4px rgba(0,0,0,0.11), 0 6px 8px rgba(0,0,0,0.11), 0 8px 16px rgba(0,0,0,0.11)",
        borderRadius: "10px",
        padding: "20px"
      }}
    >
      <h3>Ändra lösenord</h3>
      <div
        css={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <form onSubmit={changePassword}>
          <Input
            placeholder="Nuvarande lösenord"
            type="password"
            onChange={e => {
              setCurrentPass(e.target.value);
            }}
            value={currentPass}
          />
          <Input
            placeholder="Nytt lösenord"
            type="password"
            onChange={e => {
              setNewPass(e.target.value);
            }}
            value={newPass}
          />
          <Input
            placeholder="Upprepa nytt lösenord"
            type="password"
            onChange={e => {
              setRepeatNewPass(e.target.value);
            }}
            value={repeatNewPass}
          />
          <PrimaryButton type="submit">Spara</PrimaryButton>
        </form>
      </div>
      <ErrorMsg msg={errorMsg} />
      <ValidationMsg msg={validationMsg} />
    </div>
  );
};

export default UpdatePassword;
