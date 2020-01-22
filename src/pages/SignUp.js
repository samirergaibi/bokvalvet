/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment, useEffect, useContext } from "react";
import { navigate } from "@reach/router";

import SignUpForm from "../components/SignUpForm";
import AuthContext from "../components/AuthContext";

const SignUp = () => {
  const {authRespReceived, user} = useContext(AuthContext);

  useEffect(() => {
    if(authRespReceived && user){
      navigate("/mitt-konto");
    }
  }, [authRespReceived, user]);

  return (
    (authRespReceived && !user) &&
    <Fragment>
      <h1>Skapa Konto</h1>
      <SignUpForm />
    </Fragment>
  );
};

export default SignUp;
