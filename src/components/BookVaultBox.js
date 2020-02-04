/** @jsx jsx  */
import { jsx } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@reach/router";

import mq from "../utils/mediaQueries";
import bookLoverImage from "../images/book-lover.png";


const BookVaultBox = () => {
  return (
    <div
      css={{
        boxShadow:
          "0 1px 1px rgba(0,0,0,0.11), 0 2px 2px rgba(0,0,0,0.11), 0 4px 4px rgba(0,0,0,0.11), 0 6px 8px rgba(0,0,0,0.11), 0 8px 16px rgba(0,0,0,0.11)",
        borderRadius: "10px",
        padding: "40px 20px",
      }}
    >
      <div
        css={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center"
        }}
      >
        <div>
          <h3>Ditt bokvalv</h3>
          <p>Ett centralt ställe för dina lästa böcker.</p>
        </div>
        <img
          src={bookLoverImage}
          alt="book-vault"
          css={{
            width: "120px",
            [mq[2]]: {
              width: "20vw"
            }
          }}
        />
      </div>
      <Link
        to="/bokvalv"
        css={{
          textDecoration: "none",
          display: "inline-block",
          marginTop: "20px",
          color: "#1a73e8",
          ":hover": {
            textDecoration: "underline"
          }
        }}
      >
        Gå till ditt bokvalv
        <FontAwesomeIcon
          icon="arrow-right"
          css={{ position: "relative", top: "1px", left: "3px" }}
        />
      </Link>
    </div>
  );
};

export default BookVaultBox;