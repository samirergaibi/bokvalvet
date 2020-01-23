/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment, useContext, useEffect } from "react";
import { navigate } from "@reach/router";

import { FirebaseContext } from "../components/Firebase";

const Account = () => {
  const { authRespReceived, user } = useContext(FirebaseContext);

  useEffect(() => {
    if(authRespReceived && !user){
      navigate("/");
    }
  }, [authRespReceived, user]);

  return (
    <Fragment>
      <h1>Välkommen</h1>
      {
        user ?
        <p>{user.email}</p>
        : <p>Loading...</p>
      }
    </Fragment>
  );
}

export default Account;