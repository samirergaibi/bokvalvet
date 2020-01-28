/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment, useState } from "react";

import Nav from "./Nav";
import HamburgerButton from "../components/HamburgerButton";
import mq from "../utils/mediaQueries";

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
          <HamburgerButton isClosed={isClosed} setIsClosed={setIsClosed} />
        </div>
        <Nav isClosed={isClosed} setIsClosed={setIsClosed} />
      </header>
      <main css={{ marginTop: "15vh" }}>{children}</main>
      <footer></footer>
    </Fragment>
  );
};

export default Layout;
