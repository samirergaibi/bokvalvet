/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment } from "react";
import { navigate, Link } from "@reach/router";
import { useState } from "react";

import SignInForm from "../components/SignInForm";
import GoogleButton from "../components/GoogleButton";
import FacebookButton from "../components/FacebookButton";
import firebase from "../components/Firebase";
import mq from "../utils/mediaQueries";
import ErrorMsg from "../components/ErrorMsg";

const Login = () => {
  const [errorMsg, setErrorMsg] = useState();
  function loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(() => {
        navigate("/konto");
      })
      .catch(err => {
        console.log("Error signing in with Google: ", err);
      });
  }
  function loginWithFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(() => {
        navigate("/konto");
      })
      .catch(err => {
        console.log("Error signing in with Facebook: ", err);
        if(err.code === "auth/account-exists-with-different-credential"){
          setErrorMsg("Konto med denna mejladress existerar redan.");
        }
      });
  }

  return (
    <Fragment>
      <h1
        css={{
          textAlign: "center"
        }}
      >
        Logga in
      </h1>
      <div
        css={{
          width: "80vw",
          margin: "0 auto",
          [mq[2]]: {
            width: "30vw"
          }
        }}
      >
        <SignInForm />
        <div
          css={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10px"
          }}
        >
          <Link
            to="/glomt-losenord"
            css={{
              color: "#1a73e8",
              textDecoration: "none",
              ":hover": {
                textDecoration: "underline"
              }
            }}
          >
            Glömt lösenord?
          </Link>
        </div>
        <div
          css={{
            margin: "40px 0"
          }}
        >
          <GoogleButton onClick={loginWithGoogle} />
          <br />
          <FacebookButton onClick={loginWithFacebook} />
          <ErrorMsg msg={errorMsg} />
        </div>
        <p css={{ textAlign: "center" }}>
          Har du inget konto?{" "}
          <Link
            css={{
              color: "#1a73e8",
              textDecoration: "none",
              ":hover": { textDecoration: "underline" }
            }}
            to="/skapa-konto"
          >
            skapa konto.
          </Link>
        </p>
      </div>
    </Fragment>
  );
};

export default Login;
