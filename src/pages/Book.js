/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getBook } from "../api/api";
import dateConverter from "../utils/dateConverter";
import noImageFound from "../images/no-image-found.jpg";

const Book = ({ id }) => {
  const [book, setBook] = useState();

  useEffect(() => {
    getBook(id).then(resp => {
      setBook(resp.volumeInfo);
      console.log(resp.volumeInfo);
    });
  }, [id]);
  // if (book) {
  //   book.authors = ["Samir Ergaibi", "Elin Säfström", "Solveig Ergaibi"];
  // }

  return (
    <Fragment>
      {book ? (
        <div
          css={{
            textAlign: "center"
          }}
        >
          <h1>{book.title}</h1>
          {book.imageLinks ? (
            <img src={book.imageLinks.thumbnail} alt={`${book.title}`} />
          ) : (
            <img src={noImageFound} alt={`${book.title}`} />
          )}
          <div>
            <div css={{
              display: "flex",
              justifyContent: "center",
              alignItems: "start  "
            }}>
              <p css={{margin: "0 5px 0 0"}}>av:</p>
              <div css={{
                display: "flex",
                flexDirection: "column",
              }}>
                {book.authors &&
                  book.authors.map((author, i) => (
                    <a
                      key={`${author}-${i}`}
                      href={`https://www.google.se/search?q=${author}`}
                      target="_blank"
                      rel="noreferrer"
                      rel="noopener"
                      css={{
                        textDecoration: "none",
                        color: "#0000EE"
                      }}
                    >
                      {author}
                    </a>
                  ))}
              </div>
            </div>
            <div
              css={{
                display: "flex",
                justifyContent: "space-around",
                "& p": {
                  fontFamily: "'Lato', sans-serif"
                },
                "& svg": {
                  marginRight: "10px",
                  color: "#a46e0d"
                  // color: "#d6be97"
                }
              }}
            >
              <p>
                <FontAwesomeIcon icon={["far", "calendar-alt"]} />
                {dateConverter(book.publishedDate)}
              </p>
              <p>
                <FontAwesomeIcon icon="book" />
                {book.pageCount}
              </p>
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: book.description }}></div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </Fragment>
  );
};

export default Book;
