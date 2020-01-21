/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment } from "react";

import SignUpForm from "../components/SignUpForm";

const SignUp = () => {
  return (
    <Fragment>
      <h1>Skapa Konto</h1>
      <SignUpForm />
    </Fragment>
  );
};

export default SignUp;
