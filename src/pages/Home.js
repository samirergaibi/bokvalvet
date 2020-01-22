/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment, useContext } from "react";

import Search from "../components/Search";
import SignInForm from "../components/SignInForm";
import { AuthContext } from "../components/AuthContext";
import firebase from "../setupFirebase";

const Home = () => {
  const userContext = useContext(AuthContext);

  return (
    <Fragment>
      <h1>Välkommen till Bokvalvet</h1>
      <Search />
      {userContext.authRespReceived ? (
        userContext.user ? (
          <Fragment>
            <p>{`Hejsan ${userContext.user.email}!`}</p>
            <button
              onClick={() => {
                firebase.auth().signOut();
              }}
            >
              Logout
            </button>
          </Fragment>
        ) : (
          <Fragment>
            <h2>Sign In</h2>
            <SignInForm />
          </Fragment>
        )
      ) : (
        <p>loading...</p>
      )}
    </Fragment>
  );
};

export default Home;
