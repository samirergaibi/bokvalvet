/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment, useContext } from "react";
import { Link } from "@reach/router";

import { FirebaseContext } from "./Firebase";

const SearchResult = ({ result }) => {
  const {items: books} = result;
  const { user } = useContext(FirebaseContext);
  
  return (
    <div css={{
      width: "100%"
    }}>
      {
        books.map(book => {
          return (
            <div key={book.id} css={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              ":last-of-type hr": {
                display: "none"
              }
            }}>
              {
                book.volumeInfo.imageLinks &&
                <Fragment>
                  <Link to={`book/${book.id}`} css={{
                    textDecoration: "none",
                    color: "#000"
                  }}>
                    <h3>{book.volumeInfo.title}</h3>
                  </Link>
                  <Link to={`book/${book.id}`}>
                    <img src={book.volumeInfo.imageLinks.thumbnail} alt={`${book.volumeInfo.title}`} />
                  </Link>
                  {
                    user &&
                    <button css={{
                      width: "40vw",
                      marginTop: "2vh",
                      padding: "10px 15px",
                      backgroundColor: "#e9ecef",
                      border: "1px solid #e9ecef",
                      borderRadius: "5px",
                      outline: "none"
                    }}>Lägg till i bokvalv</button>
                  }
                  <hr />
                </Fragment>
              }
            </div>
          );
        })
      }
    </div>
  );
}

export default SearchResult;