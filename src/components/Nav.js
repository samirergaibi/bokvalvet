/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";

import mq from "../utils/mediaQueries";

const Nav = ({ isClosed, setIsClosed }) => {
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
          justifyContent: "space-around",
          padding: 0,
        },
        "& a": {
          color: "#fff",
          textDecoration: "none",
          fontSize: "36px",
          margin: "15px 0",
          [mq[2]]: {
            fontSize: "20px"
          },
        }
      }}>
        <Link onClick={() => { setIsClosed(!isClosed) }} to="/">Hem</Link>
        <Link onClick={() => { setIsClosed(!isClosed) }} to="/om-bokvalvet">Om Bokvalvet</Link>
        <Link onClick={() => { setIsClosed(!isClosed) }} to="/skapa-konto">Skapa konto</Link>
      </div>
    </nav>
  );
};

export default Nav;
