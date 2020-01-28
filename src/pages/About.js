/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment } from "react";

const About = () => {
  return(
    <Fragment>
        <h1 css={{ textAlign: "center" }}>Om Bokvalvet</h1>
        <p css={{ textAlign: "center" }}>Ett centralt ställe för alla dina lästa böcker, recensioner och privata summeringar. Aldrig mer ska en erfarenhet av en läst bok gå till spillo.</p>
    </Fragment>
  );
}

export default About;