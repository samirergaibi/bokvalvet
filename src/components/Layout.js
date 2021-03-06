/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment, useState } from "react";
import { Link } from "@reach/router";

import Nav from "./Nav";
import HamburgerButton from "../components/HamburgerButton";
import mq from "../utils/mediaQueries";
import Logo from "../images/logo.png";

const Layout = ({ children }) => {

  const [isClosed, setIsClosed] = useState(true);

  return (
    <Fragment>
      <header css={{
        backgroundColor: "#ff6464",
        position: "fixed",
        width: "100vw",
        top: "0",
        zIndex: "1",
        padding: "20px 20px",
        [mq[2]]: {
          padding: "10px 20px"
        }
      }}>
        <div
          css={{
            display: "flex",
            "& > div": {
              marginLeft: "auto",
            },
            [mq[2]]: {
              display: "none"
            }
          }}>
          <Link to="/" >
            <img src={Logo} alt="Logo" css={{
              width: "50px",
              position: "absolute",
              top: "5px",
              left: "10px",
              zIndex: "2",
              backfaceVisibility: "hidden"
            }} />
          </Link>
          <HamburgerButton isClosed={isClosed} setIsClosed={setIsClosed} />
        </div>
        <Nav isClosed={isClosed} setIsClosed={setIsClosed} />
      </header>
      <main css={{ margin: "15vh auto 5vh" }}>{children}</main>
      <footer></footer>
    </Fragment>
  );
};

export default Layout;
