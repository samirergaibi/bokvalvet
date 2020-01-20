import React, { Fragment, useContext } from "react";

import Nav from "../components/Nav";
import Search from "../components/Search";
import SignInForm from "../components/SignInForm";
import { UserContext } from "../components/AuthContext";
import firebase from "../setupFirebase";

const Home = () => {
  const userContext = useContext(UserContext);

  return (
    <Fragment>
      <Nav />
      <main>
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
      </main>
    </Fragment>
  );
};

export default Home;
