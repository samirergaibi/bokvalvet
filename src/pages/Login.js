/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment } from "react";
import { navigate, Link } from "@reach/router";

import SignInForm from "../components/SignInForm";
import GoogleButton from "../components/GoogleButton";
import firebase from "../components/Firebase";
import mq from "../utils/mediaQueries";

const Login = () => {
  function loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        navigate("/konto");
      })
      .catch(err => {
        console.log(err);
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
        <div css={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px"
        }}>
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
