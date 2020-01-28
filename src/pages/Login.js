/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment } from "react";
import { navigate } from "@reach/router";

import SignInForm from "../components/SignInForm";
import GoogleButton from "../components/GoogleButton";
import firebase from "../components/Firebase";
import mq from "../utils/mediaQueries";

const Login = () => {

  function loginWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(result => {
      console.log(result);
      navigate("mitt-konto")
    }).catch(err => {
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
        <div
          css={{
            margin: "40px 0px"
          }}
        >
          <GoogleButton onClick={loginWithGoogle} />
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
