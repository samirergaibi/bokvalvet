/** @jsx jsx */
import { jsx } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@reach/router";
import { useContext, useState } from "react";

import SecondaryButton from "./SecondaryButton";
import mq from "../utils/mediaQueries";
import { FirebaseContext } from "./Firebase";
import noCoverImage from "../images/no-cover-2.jpg";
import addBookToVault from "../database/addBookToVault";

const BookCard = ({ book: bookInfo }) => {
  const [added, setAdded] = useState(false);

  const { user } = useContext(FirebaseContext);
  const { volumeInfo: book } = bookInfo;
  if (book.authors && book.authors.length > 2) {
    book.authors = book.authors.slice(0, 2);
    book.authors.push("m.fl.");
  }
  function addBook() {
    const image = book.imageLinks ? book.imageLinks.thumbnail : null;
    addBookToVault(user.uid, bookInfo.id, book.title, image, book.authors).then(resp => {
      if(resp){
        setAdded(true);
      }
    });
  }
  return (
    <div
      css={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        letterSpacing: "1px",
        backgroundColor: "#fdfdfd",
        padding: "4vh 2vh 2vh 2vh",
        borderRadius: "10px",
        boxShadow:
          "0 1px 1px rgba(0,0,0,0.11), 0 2px 2px rgba(0,0,0,0.11), 0 4px 4px rgba(0,0,0,0.11), 0 6px 8px rgba(0,0,0,0.11), 0 8px 16px rgba(0,0,0,0.11)",
        [mq[2]]: {
          width: "100%",
          height: "100%"
        }
      }}
    >
      <Link
        to={`bok/${bookInfo.id}`}
        css={{ color: "#000", textDecoration: "none" }}
      >
        <h3
          css={{
            margin: "0 auto 20px auto"
          }}
        >
          {book.title}
        </h3>
      </Link>
      {book.authors && (
        <div
          css={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "10px auto"
          }}
        >
          <FontAwesomeIcon
            icon="feather-alt"
            css={{ marginRight: "10px", color: "#d6be97" }}
          />
          {
            <div>
              {book.authors.map((author, i) => (
                <p css={{ margin: 0 }} key={`${author}-${i}`}>
                  {author}
                </p>
              ))}
            </div>
          }
        </div>
      )}
      <Link
        to={`bok/${bookInfo.id}`}
        css={{ color: "#000", textDecoration: "none" }}
      >
        {book.imageLinks ? (
          <img src={book.imageLinks.thumbnail} alt={`${book.title}`} />
        ) : (
          <img
            src={noCoverImage}
            alt={`${book.title}`}
            css={{
              maxHeight: "200px"
            }}
          />
        )}
      </Link>
      <div css={{ marginTop: "20px" }}>
        {user ? (
          <SecondaryButton onClick={addBook}>
            Lägg till i bokvalv
          </SecondaryButton>
        ) : (
          <SecondaryButton disabled>Lägg till i bokvalv</SecondaryButton>
        )}
        <p
          css={{
            opacity: added ? "1" : "0",
            color: "rgba(29, 185, 84, 0.8)",
            fontWeight: 600,
            transition: "all 0.1s",
          }}
        >
          Boken har lagts till.
        </p>
      </div>
    </div>
  );
};

export default BookCard;
