/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment, useContext } from "react";
import { Link } from "@reach/router";

import mq from "../utils/mediaQueries";
import firebase, { FirebaseContext } from "./Firebase";
import Logo from "../images/logo.png";
import NavLink from "./NavLink";


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
      }}>
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
              top: "10px",
              left: "10px",
              zIndex: "5"
            }
          }}>
            <img src={Logo} alt="logo" css={{ width: "60px" }} />
          </Link>
          <NavLink onClick={() => { setIsClosed(!isClosed) }} to="/">Hem</NavLink>
          <NavLink onClick={() => { setIsClosed(!isClosed) }} to="/om-bokvalvet">Om Bokvalvet</NavLink>
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
                <NavLink onClick={() => { setIsClosed(!isClosed) }} to="/konto">Konto</NavLink>
                <NavLink onClick={() => { setIsClosed(!isClosed) }} to="/bokvalv">Bokvalv</NavLink>
                <NavLink onClick={() => { setIsClosed(!isClosed); firebase.auth().signOut(); }} to="/logga-in">Logga ut</NavLink>
              </Fragment>
              ) : (
                <Fragment>
                  <NavLink onClick={() => { setIsClosed(!isClosed) }} to="/skapa-konto">Skapa konto</NavLink>
                  <NavLink onClick={() => { setIsClosed(!isClosed) }} to="/logga-in">Logga in</NavLink>
                </Fragment>
            ) : null
          }
        </div>
      </div>
    </nav>
  );
};

export default Nav;
