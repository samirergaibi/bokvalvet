/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";

const Nav = ({ isClosed, setIsClosed }) => {
  console.log(isClosed);
  return (
    <nav css={{
      height: "100vh",
      width: "100vw",
      backgroundColor: "#347474",
      position: "fixed",
      zIndex: 1,
      top: 0,
      left: isClosed ? "100vw" : "0vw",
      transition: "all .4s",
    }}>
      <div css={{
        padding: "15vh 5vh",
        display: "flex",
        flexDirection: "column",
        "& a": {
          color: "#fff",
          textDecoration: "none",
          fontSize: "36px",
          margin: "15px 0",
        }
      }}>
        <Link onClick={() => { setIsClosed(!isClosed) }} to="/">Home</Link>
        <Link onClick={() => { setIsClosed(!isClosed) }} to="/om-bokvalvet">Om Bokvalvet</Link>
        <Link onClick={() => { setIsClosed(!isClosed) }} to="/skapa-konto">Skapa konto</Link>
      </div>
    </nav>
  );
};

export default Nav;
