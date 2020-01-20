import React, { Fragment } from "react";

import Nav from "../components/Nav";
import SignUpForm from "../components/SignUpForm";

const SignUp = () => {
  return(
    <Fragment>
      <Nav />
      <main>
        <h1>Skapa Konto</h1>
        <SignUpForm />
      </main>
    </Fragment>
  );
}

export default SignUp;