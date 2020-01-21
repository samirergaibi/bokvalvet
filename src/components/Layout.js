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
        backgroundColor: "#347474"
      }}>
        <div
          css={{
            display: "flex",
            padding: "20px 20px",
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
      <main>{children}</main>
      <footer></footer>
    </Fragment>
  );
};

export default Layout;
