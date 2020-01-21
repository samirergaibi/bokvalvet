/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";

import HamburgerButton from "../components/HamburgerButton";

const Nav = () => {
  return (
    <nav css={{
      height: "100vh",
      width: "100vw",
      backgroundColor: "#b0eacd",
      position: "fixed",
      zIndex: 1,
      top: 0,
    }}>
      <div css={{
        position: "absolute",
        top: 40,
        right: 30,
      }}>
        <HamburgerButton />
      </div>
      <div css={{
        padding: "15vh 5vh",
        display: "flex",
        flexDirection: "column",
        "& a": {
          color: "#000",
          textDecoration: "none",
          fontSize: "36px",
          margin: "15px 0",
        }
      }}>
        <Link to="/">Home</Link>
        <Link to="/om-bokvalvet">Om Bokvalvet</Link>
        <Link to="/skapa-konto">Skapa konto</Link>
      </div>
    </nav>
  );
};

export default Nav;
