/** @jsx jsx */
import { jsx } from "@emotion/core";

import bookChaos from "../images/book-chaos.jpg";
import mq from "../utils/mediaQueries";

const About = () => {
  return (
    <div
      css={{
        textAlign: "center",
        letterSpacing: "1px",
        lineHeight: "1.6"
      }}
    >
      <h1>Om Bokvalvet</h1>
      <article css={{
        width: "90vw",
        margin: "0 auto",
        boxShadow: "0 1px 1px rgba(0,0,0,0.11), 0 2px 2px rgba(0,0,0,0.11), 0 4px 4px rgba(0,0,0,0.11), 0 6px 8px rgba(0,0,0,0.11), 0 8px 16px rgba(0,0,0,0.11)",
        borderRadius: "10px",
        padding: "30px",
        [mq[2]]: {
          display: "flex",
          width: "70vw",
          margin: "10vh auto"
        },
      }}>
        <div css={{
          [mq[2]]: {
            marginRight: "5vw",
          }
        }}>
          <h2>Varför finns Bokvalvet?</h2>
          <p>
            Syftet bakom Bokvalvets existens är att skapa en plats där man kan
            samla alla böcker som man har läst på ett centralt ställe. Här kan du
            förvara dom i ditt alldeles egna bokvalv samt skriva egna noteringar
            för böckerna. Känner du även att du har lite åsikter om en bok som du
            gärna vill dela med dig av så kan du dessutom lämna recensioner på
            böckerna.
          </p>
        </div>
        <img src={bookChaos} alt="dreamy-book" css={{
          width: "80%",
          margin: "0 auto",
          [mq[2]]: {
            width: "40%",
          },
          borderRadius: "10px"
        }} />
      </article>
    </div>
  );
};

export default About;
