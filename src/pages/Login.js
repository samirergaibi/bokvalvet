/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment } from "react";

import SignInForm from "../components/SignInForm";

const Login = () => {
  return (
    <Fragment>
      <h1>Logga in</h1>
      <SignInForm />
    </Fragment>
  );
}

export default Login;