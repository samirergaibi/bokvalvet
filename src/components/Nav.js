/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";
import { Fragment, useContext } from "react";

import mq from "../utils/mediaQueries";
import firebase, { FirebaseContext } from "./Firebase";
import Logo from "../images/logo.png";


const Nav = ({ isClosed, setIsClosed }) => {
  const { authRespReceived, user } = useContext(FirebaseContext);

  return (
    <nav css={{
      height: "100vh",
      width: "100vw",
      backgroundColor: "#ff6464",
      position: "fixed",
      zIndex: 1,
      top: 0,
      left: isClosed ? "100vw" : "0vw",
      transition: "all .4s",
      [mq[2]]: {
        position: "initial",
        left: "initial",
        height: "initial",
        width: "initial",
      }
    }}>
      <div css={{
        padding: "15vh 5vh",
        display: "flex",
        flexDirection: "column",
        [mq[2]]: {
          flexDirection: "row",
          justifyContent: "flex-end",
          padding: "5px",
        },
        "& a": {
          color: "#fff",
          textDecoration: "none",
          fontSize: "32px",
          margin: "1.5vh 0",
          [mq[2]]: {
            fontSize: "20px",
            marginLeft: "20px",
            marginRight: "20px"
          }
        }
      }}>
        <p css={{marginRight: "auto"}} id="logo"></p>
        <div css={{
          display: "flex",
          flexDirection: "column",
          [mq[2]]: {
            flexDirection: "row",
          }
        }}>
          <Link to="/" css={{
            display: "none",
            [mq[2]]: {
              display: "initial",
              position: "absolute",
              top: "0",
              left: "0",
              zIndex: "5"
            }
          }}>
            <img src={Logo} alt="logo" css={{ width: "60px" }} />
          </Link>
          <Link onClick={() => { setIsClosed(!isClosed) }} to="/">Hem</Link>
          <Link onClick={() => { setIsClosed(!isClosed) }} to="/om-bokvalvet">Om Bokvalvet</Link>
        </div>
        <div css={{
          height: "2px",
          width: "10vw",
          backgroundColor: "#fff",
          margin: "5vh 0",
          [mq[2]]: {
            transform: "rotate(90deg)",
            width: "25px",
            height: "1.5px",
            margin: "auto 0",
          }
        }}></div>
        <div css={{
          display: "flex",
          flexDirection: "column",
          [mq[2]]: {
            flexDirection: "row",
          }
        }}>
          {
            authRespReceived ? user ? (
              <Fragment>
                <Link onClick={() => { setIsClosed(!isClosed) }} to="/konto">Konto</Link>
                <Link onClick={() => { setIsClosed(!isClosed) }} to="/bokvalv">Bokvalv</Link>
                <Link onClick={() => { setIsClosed(!isClosed); firebase.auth().signOut(); }} to="/logga-in">Logga ut</Link>
              </Fragment>
              ) : (
                <Fragment>
                  <Link onClick={() => { setIsClosed(!isClosed) }} to="/skapa-konto">Skapa konto</Link>
                  <Link onClick={() => { setIsClosed(!isClosed) }} to="/logga-in">Logga in</Link>
                </Fragment>
            ) : null
          }
        </div>
      </div>
    </nav>
  );
};

export default Nav;
