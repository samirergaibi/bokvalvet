/** @jsx jsx  */
import { jsx } from "@emotion/core";
import { useState, useContext } from "react";

import firebase, { FirebaseContext } from "../components/Firebase";
import PrimaryButton from "../components/PrimaryButton";

const VerifyEmail = () => {
  const { user } = useContext(FirebaseContext);
  const [emailSent, setEmailSent] = useState(false);
  return (
    <div
      css={{
        textAlign: "center",
        width: "80vw",
        margin: "0 auto",
        letterSpacing: "1px",
        lineHeight: "1.6"
      }}
    >
      <h1>Verifiera din epost-adress</h1>
      <div
        css={{
          padding: "20px 30px",
          borderRadius: "10px",
          boxShadow:
            "0 1px 1px rgba(0,0,0,0.11), 0 2px 2px rgba(0,0,0,0.11), 0 4px 4px rgba(0,0,0,0.11), 0 6px 8px rgba(0,0,0,0.11), 0 8px 16px rgba(0,0,0,0.11)"
        }}
      >
        <p>
          För att börja använda Bokvalvets tjänster behöver du verifiera din
          epost-adress i mailet som har skickats till <em>{user && user.email}</em>.
        </p>
        <p css={{ fontWeight: "600" }}>
          Du kan stänga denna flik när du är klar.
        </p>
        <PrimaryButton
          onClick={() => {
            setEmailSent(true);
            const actionCodeSettings = {
              url: `http://localhost:3000/konto`
            };
            firebase.auth().currentUser.sendEmailVerification(actionCodeSettings);
          }}
        >
          Skicka ett nytt verifikationsmail
        </PrimaryButton>
        {emailSent && (
          <p css={{ fontSize: "12px" }}>
            Mejlet har skickats. Det kan ta en liten stund innan det kommer
            fram.
          </p>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;
