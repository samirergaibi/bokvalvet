/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment, useContext, useEffect } from "react";
import { navigate, Link } from "@reach/router";

import { FirebaseContext } from "../components/Firebase";
import bookLoverImage from "../images/book-lover.png";
import mq from "../utils/mediaQueries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Account = () => {
  const { authRespReceived, user } = useContext(FirebaseContext);

  useEffect(() => {
    if (authRespReceived && !user) {
      navigate("/");
    } else if (authRespReceived && !user.emailVerified) {
      navigate("/verifiera-epost-adress");
    }
  }, [authRespReceived, user]);

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
              boxShadow:
                "0 1px 1px rgba(0,0,0,0.11), 0 2px 2px rgba(0,0,0,0.11), 0 4px 4px rgba(0,0,0,0.11), 0 6px 8px rgba(0,0,0,0.11), 0 8px 16px rgba(0,0,0,0.11)",
              borderRadius: "10px",
              width: "90vw",
              margin: "40px auto",
              padding: "40px 20px",
              [mq[2]]: {
                width: "60vw",
                marginTop: "10vh"
              },
              [mq[3]]: {
                marginTop: "5vh",
                width: "55vw",
                padding: "30px 15px"
              }
            }}
          >
            <div
              css={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center"
              }}
            >
              <div>
                <h3>Ditt bokvalv</h3>
                <p>Ett centralt ställe för dina lästa böcker.</p>
              </div>
              <img
                src={bookLoverImage}
                alt="book-vault"
                css={{
                  width: "120px",
                  [mq[2]]: {
                    width: "20vw"
                  }
                }}
              />
            </div>
            <Link
              to="/bokvalv"
              css={{
                textDecoration: "none",
                display: "inline-block",
                marginTop: "20px",
                color: "#1a73e8",
                ":hover": {
                  textDecoration: "underline"
                }
              }}
            >
              Gå till ditt bokvalv
              <FontAwesomeIcon
                icon="arrow-right"
                css={{ position: "relative", top: "1px", left: "3px" }}
              />
            </Link>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Account;
