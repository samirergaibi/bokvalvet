/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment, useState, useEffect, useContext } from "react";

import { db, FirebaseContext } from "../components/Firebase";
import bigBook from "../images/big-book.png";
import mq from "../utils/mediaQueries";
import VaultBook from "../components/VaultBook";
import ConfirmPopup from "../components/ConfirmPopup";
import deleteBookFromVault from "../database/deleteBookFromVault";

const BookVault = () => {
  const { user } = useContext(FirebaseContext);

  const [books, setBooks] = useState([]);
  const [bookToRemove, setBookToRemove] = useState();
  const [popupIsVisible, setPopupIsVisible] = useState(false);

  useEffect(() => {
    if (user) {
      const unsubscribe = db
        .collection("vaultBooks")
        .where("user_id", "==", user.uid)
        .orderBy("added", "asc")
        .onSnapshot(snapshot => {
          let allBooks = [];
          snapshot.forEach(doc => {
            allBooks.push(doc.data());
          });
          allBooks.reverse();
          setBooks(allBooks);
        });
      return unsubscribe;
    }
  }, [user]);

  function deleteBook(id) {
    deleteBookFromVault(user.uid, id);
  }

  return (
    <Fragment>
      <ConfirmPopup
        visible={popupIsVisible}
        setVisible={setPopupIsVisible}
        deleteBook={deleteBook}
        bookToRemove={bookToRemove}
      />
      <div
        css={{
          textAlign: "center",
          width: "90vw",
          margin: "0 auto",
          lineHeight: "1.6",
          letterSpacing: "1px",
          [mq[3]]: {
            width: "40vw",
            marginBottom: "2vh"
          }
        }}
      >
        <h1 css={{ margin: 0 }}>Bokvalv</h1>
        <img
          src={bigBook}
          alt="apple on stacked books"
          css={{
            width: "80%",
            margin: "0 auto",
            display: "block",
            [mq[3]]: {
              width: "50%"
            }
          }}
        />
        <p css={{ marginTop: 0 }}>
          Ditt personliga bokvalv är en digital bokhylla där du inte enbart kan
          förvara din böcker, utan även skriva egna sammanfattningar.
          <br />
          <br />
          Sätt igång direkt och ha allt samlat på en och samma plats.
        </p>
      </div>
      {books.map(book => {
        return (
          <Fragment key={book.book_id}>
            <hr css={{ width: "40vw" }} />
            <VaultBook
              book={book}
              setBookToRemove={setBookToRemove}
              setPopupIsVisible={setPopupIsVisible}
            />
          </Fragment>
        );
      })}
    </Fragment>
  );
};

export default BookVault;
