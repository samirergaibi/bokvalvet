/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment } from "react";

import Search from "../components/Search";

const Home = () => {

  return (
    <Fragment>
      <h1
        css={{
          textAlign: "center"
        }}
      >
        Bokvalvet
      </h1>
      <p css={{ textAlign: "center" }}>Var god och sök på en bok</p>
      <Search />
    </Fragment>
  );
};

export default Home;
