/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment } from "react";

import Search from "../components/Search";

const Home = () => {
  return (
    <Fragment>
      <h1>Välkommen till Bokvalvet</h1>
      <Search />
    </Fragment>
  );
};

export default Home;
