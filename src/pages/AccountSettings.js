/** @jsx jsx  */
import { jsx } from "@emotion/core";
import { Fragment, useContext, useState } from "react";

import { FirebaseContext } from "../components/Firebase";
import mq from "../utils/mediaQueries";
import UpdateProfile from "../components/UpdateProfile";
import UpdatePassword from "../components/UpdatePassword";

const AccountSettings = () => {
  const { user } = useContext(FirebaseContext);
  const [rerender, setRerender] = useState(false);
  const boxShadow =
    "0 1px 1px rgba(0,0,0,0.11), 0 2px 2px rgba(0,0,0,0.11), 0 4px 4px rgba(0,0,0,0.11), 0 6px 8px rgba(0,0,0,0.11), 0 8px 16px rgba(0,0,0,0.11)";
  return (
    <Fragment>
      {user && user.emailVerified && (
        <div
          css={{
            textAlign: "center",
            letterSpacing: "1px"
          }}
        >
          <h1>{user.displayName}</h1>
          <img
            src={user.photoURL}
            alt={`${user.displayName}-initials`}
            css={{
              borderRadius: "50%",
              width: "128px",
              [mq[2]]: {
                width: "10vw"
              },
              [mq[5]]: {
                width: "10vw"
              }
            }}
          />
          <div
            css={{
              marginTop: "25px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              [mq[2]]: {
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "stretch",
                marginTop: "10vh"
              },
              "& > div": {
                width: "90vw",
                boxShadow: boxShadow,
                borderRadius: "10px",
                padding: "20px",
                [mq[2]]: {
                  width: "35vw"
                }
              },
              "& > hr": {
                [mq[2]]: {
                  display: "none"
                }
              }
            }}
          >
            <UpdateProfile rerender={rerender} setRerender={setRerender} />
            <hr css={{ width: "40vw", margin: "50px auto" }} />
            <UpdatePassword />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default AccountSettings;
