/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment, useEffect, useContext } from "react";
import { navigate, Link } from "@reach/router";

import SignUpForm from "../components/SignUpForm";
import { FirebaseContext } from "../components/Firebase";
import mq from "../utils/mediaQueries";

const SignUp = () => {
  const { authRespReceived, user } = useContext(FirebaseContext);

  useEffect(() => {
    if (authRespReceived && user) {
      navigate("/konto");
    }
  }, [authRespReceived, user]);

  return (
    authRespReceived &&
    !user && (
      <Fragment>
        <h1 css={{ textAlign: "center" }}>Skapa Konto</h1>
        <div
          css={{
            width: "80vw",
            margin: "0 auto",
            [mq[2]]: {
              width: "30vw"
            }
          }}
        >
          <SignUpForm />
          <p css={{ textAlign: "center" }}>Har du redan ett konto? <Link to="/logga-in" css={{
            color: "#1a73e8",
            textDecoration: "none",
            ":hover": {
              textDecoration: "underline"
            }
          }}>logga in.</Link></p>
        </div>
      </Fragment>
    )
  );
};

export default SignUp;
