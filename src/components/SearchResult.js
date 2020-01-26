/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment } from "react";

import BookCard from "./BookCard";
import mq from "../utils/mediaQueries";

const SearchResult = ({ result }) => {
  const { items: books } = result;

  return (
    <div
      css={{
        width: "100%",
        gridGap: "50px",
        [mq[2]]: {
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridGap: "60px 60px"
        },
        [mq[3]]: {
          gridGap: "50px 100px"
        },
        [mq[4]]: {
          gridGap: "100px 200px"
        }
      }}
    >
      {books.map(book => {
        return (
          // book.volumeInfo.imageLinks &&
          <Fragment key={book.id}>
            <div css={{
              margin: "10vh auto",
              [mq[2]]: {
                margin: "0",
                width: "100%",
                height: "100%"
              }
            }}>
              <BookCard book={book} />
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default SearchResult;
