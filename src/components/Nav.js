/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";

const Nav = () => {
  return (
    <nav css={{
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      width: "100vw",
      backgroundColor: "#b0eacd",
      position: "fixed",
      zIndex: 1,
      top: 0,
      padding: "15vh 5vh",
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
    </nav>
  );
};

export default Nav;
