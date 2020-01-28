/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment, useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { db, FirebaseContext } from "../components/Firebase";
import imageNotFound from "../images/no-image-found.jpg";
import bigBook from "../images/big-book.png";
import SecondaryButton from "../components/SecondaryButton";

const BookVault = () => {
  const { user } = useContext(FirebaseContext);

  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("vaultBooks")
        .where("user_id", "==", user.uid)
        .get()
        .then(querySnapshot => {
          let allBooks = [];
          querySnapshot.forEach(doc => {
            allBooks.push(doc.data());
          });
          setBooks(allBooks);
        });
    }
  }, [user]);

  return (
    <Fragment>
      <h1 css={{ textAlign: "center" }}>Bokvalv</h1>
      <img
        src={bigBook}
        alt="apple on stacked books"
        css={{
          width: "60vw",
          margin: "0 auto",
          display: "block"
        }}
      />
      {books.map(book => {
        return (
          <Fragment>
            <hr css={{width: "40vw"}} />
            <div
              key={book.book_id}
              css={{
                display: "flex",
                justifyContent: "start",
                margin: "10vh 0",
                width: "95vw",
              }}
            >
              {book.image_url ? (
                <img
                  src={book.image_url}
                  alt={book.title}
                  css={{ width: "30vw" }}
                />
              ) : (
                <img
                  src={imageNotFound}
                  alt={book.title}
                  css={{ width: "30vw" }}
                />
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
                <div>
                  <h2 css={{ fontSize: "20px", margin: "0" }}>{book.title}</h2>
                  {book.authors.map(author => (
                    <p css={{ margin: 0 }}>
                      <i>{author}</i>
                    </p>
                  ))}
                </div>
                <div
                  css={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <SecondaryButton>Mer Information</SecondaryButton>
                  <button css={{
                    border: "none",
                    backgroundColor: "#fb3f3f",
                    padding: "10px 20px",
                    borderRadius: "10px",
                    fontSize: "17px"
                  }}>
                    <FontAwesomeIcon icon="trash-alt" css={{color: "#fff"}} />
                  </button>
                </div>
              </div>
            </div>
            {/* <hr /> */}
          </Fragment>
        );
      })}
    </Fragment>
  );
};

export default BookVault;
