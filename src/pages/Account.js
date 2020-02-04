/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment, useContext, useEffect, useState } from "react";
import { navigate } from "@reach/router";

import { FirebaseContext } from "../components/Firebase";
import mq from "../utils/mediaQueries";
import UpdateProfile from "../components/UpdateProfile";
import UpdatePassword from "../components/UpdatePassword";
import BookVaultBox from "../components/BookVaultBox";

const Account = () => {
  const { authRespReceived, user } = useContext(FirebaseContext);
  const [rerender, setRerender] = useState(false);
  const [provider, setProvider] = useState();

  useEffect(() => {
    if (authRespReceived && !user) {
      navigate("/");
    } else if (authRespReceived && !user.emailVerified) {
      navigate("/verifiera-epost-adress");
    }
  }, [authRespReceived, user]);

  useEffect(() => {
    const userProvider =
      user &&
      user.providerData &&
      user.providerData[0] &&
      user.providerData[0].providerId;
    setProvider(userProvider);
  }, [user]);

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
          <section
            css={{
              width: "90vw",
              margin: "5vh auto",
              display: "grid",
              gridTemplateColumns: "1fr",
              [mq[0]]: {
                width: "70vw"
              },
              [mq[2]]: {
                gridTemplateColumns: "1fr 1fr",
                gridGap: "50px"
              },
              [mq[5]]: {
                width: "50vw"
              },
              "& > hr": {
                [mq[2]]: {
                  display: "none"
                }
              },
              "& > div:nth-of-type(1)": {
                [mq[2]]: {
                  gridColumn: "1/3"
                }
              },
              "& > div:nth-of-type(3)": {
                [mq[2]]: {
                  height: "fit-content"
                }
              }
            }}
          >
            <BookVaultBox />
            {provider === "password" && (
              <Fragment>
                <hr css={{ width: "40vw", margin: "50px auto" }} />
                <UpdatePassword />
                <hr css={{ width: "40vw", margin: "50px auto" }} />
                <UpdateProfile rerender={rerender} setRerender={setRerender} />
              </Fragment>
            )}
          </section>
        </div>
      )}
    </Fragment>
  );
};

export default Account;
