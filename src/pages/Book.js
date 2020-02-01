/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState, useEffect } from "react";

import { getBook } from "../api/api";
import dateConverter from "../utils/dateConverter";
import noCover from "../images/no-cover-2.jpg";
import mq from "../utils/mediaQueries";
import ReviewsContainer from "../components/ReviewsContainer";

const Book = ({ id }) => {
  const [book, setBook] = useState();

  useEffect(() => {
    getBook(id).then(resp => {
      setBook(resp.volumeInfo);
    });
  }, [id]);
  // if (book) {
  //   book.authors = ["Samir Ergaibi", "Elin Säfström", "Solveig Ergaibi"];
  // }

  return (
    <div
      css={{
        [mq[0]]: {
          width: "82vw",
          margin: "0 auto"
        },
        [mq[2]]: {
          width: "60vw"
        },
        [mq[5]]: {
          width: "50vw"
        }
      }}
    >
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
            <img src={noCover} alt={`${book.title}`} css={{ maxHeight: "30vh" }} />
          )}
          <div>
            <div
              css={{
                display: "flex",
                justifyContent: "center",
                alignItems: "start  "
              }}
            >
              <p css={{ margin: "0 5px 0 0" }}>av:</p>
              <div
                css={{
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                {book.authors &&
                  book.authors.map((author, i) => (
                    <a
                      key={`${author}-${i}`}
                      href={`https://www.google.se/search?q=${author}`}
                      rel="noreferrer noopener"
                      target="_blank"
                      css={{
                        textDecoration: "none",
                        color: "#0000EE",
                        ":hover": {
                          textDecoration: "underline"
                        }
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
                margin: "15px auto",
                "& p": {
                  margin: "5px auto"
                }
              }}
            >
              <div>
                <p css={{ borderBottom: "1px solid #000" }}>Publicerad</p>
                <p>
                  {dateConverter(book.publishedDate)}
                </p>
              </div>
              <div>
                <p css={{ borderBottom: "1px solid #000" }}>Sidor</p>
                <p>{book.pageCount}</p>
              </div>
            </div>
          </div>
          {book.description ? (
            <div
              dangerouslySetInnerHTML={{ __html: book.description }}
              css={{
                letterSpacing: "1px",
                lineHeight: "1.6",
                margin: "auto 2vw"
              }}
            ></div>
          ) : (
            <p>Ingen sammanfattning hittad.</p>
          )}
          <ReviewsContainer bookId={id} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Book;
