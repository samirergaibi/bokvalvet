/** @jsx jsx */
import { jsx } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@reach/router";

import imageNotFound from "../images/no-image-found.jpg";
import mq from "../utils/mediaQueries";
import NoteContainer from "./NoteContainer";

const VaultBook = ({ book, setPopupIsVisible, setBookToRemove }) => {
  return (
    <div>
      <div
        key={book.book_id}
        css={{
          display: "flex",
          justifyContent: "start",
          margin: "10vh auto",
          width: "95vw",
          [mq[0]]: {
            width: "50vw"
          },
          [mq[1]]: {
            width: "40vw"
          },
          [mq[4]]: {
            width: "30vw"
          },
          "& img": {
            width: "30vw",
            [mq[1]]: {
              width: "20vw"
            },
            [mq[3]]: {
              width: "10vw"
            },
            [mq[5]]: {
              width: "8vw"
            }
          }
        }}
      >
        {book.image_url ? (
          <img src={book.image_url} alt={book.title} />
        ) : (
          <img src={imageNotFound} alt={book.title} />
        )}
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            margin: "0 5px"
          }}
        >
          <div css={{ textAlign: "center" }}>
            <h2 css={{ fontSize: "20px", margin: "0" }}>{book.title}</h2>
            {book.authors.map((author, i) => (
              <p key={`${author}-${i}`} css={{ margin: 0 }}>
                <i>{author}</i>
              </p>
            ))}
          </div>
          <div
            css={{
              display: "flex",
              justifyContent: "space-around",
              "& svg": {
                marginRight: "8px"
              }
            }}
          >
            <Link
              to={`/bok/${book.book_id}`}
              css={{
                fontWeight: 600,
                textDecoration: "none",
                letterSpacing: "1px",
                fontSize: "16px",
                backgroundColor: "#007e8e",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                outline: "none",
                padding: "10px 20px",
                cursor: "pointer",
                transition: "all 0.3s ease 0s",
                boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
                ":hover": {
                  backgroundColor: "#0dafc3",
                  transform: "translateY(-2px)",
                  boxShadow: "0 7px 10px rgba(0, 0, 0, 0.3)"
                },
                ":focus": {
                  transform: "translateY(2px)",
                  boxShadow: "0 3px 10px rgba(0, 0, 0, 0.2)"
                }
              }}
            >
              <FontAwesomeIcon
                icon="book-open"
                css={{
                  color: "#fff",
                  fontSize: "17px",
                  position: "relative",
                  top: "1px"
                }}
              />
              Mer
            </Link>
            <button
              onClick={() => {
                setPopupIsVisible(true);
                setBookToRemove(book.book_id);
              }}
              css={{
                border: "none",
                backgroundColor: "#dc2b2b",
                color: "#fff",
                fontWeight: 600,
                padding: "10px 20px",
                borderRadius: "10px",
                fontSize: "17px",
                outline: "none",
                transition: "all 0.3s ease 0s",
                boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
                ":hover": {
                  cursor: "pointer",
                  backgroundColor: "#fb3f3f",
                  transform: "translateY(-2px)",
                  boxShadow: "0 7px 10px rgba(0, 0, 0, 0.3)"
                }
              }}
            >
              <FontAwesomeIcon icon="trash-alt" css={{ color: "#fff" }} />
              Ta Bort
            </button>
          </div>
        </div>
      </div>
      <NoteContainer bookId={book.book_id} />
    </div>
  );
};

export default VaultBook;
