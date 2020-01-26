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

  return (
    <Fragment>
      {book ? (
        <div
          css={{
            textAlign: "center"
          }}
        >
          <h1>{book.title}</h1>
          {book.authors &&
            book.authors.map((author, i) => (
              <p key={`${author}-${i}`}>{author}</p>
            ))}
          <p>
            <FontAwesomeIcon icon={["far", "calendar-alt"]} />
            {dateConverter(book.publishedDate)}
          </p>
          <p>
            <FontAwesomeIcon icon="book" />
            {book.pageCount}
          </p>
          {book.categories &&
            book.categories.map((category, i) => (
              <p key={`${category}-${i}`}>{category}</p>
            ))}
            {
              book.imageLinks ?
              <img src={book.imageLinks.thumbnail} alt={`${book.title}`} /> :
              <img src={noImageFound} alt={`${book.title}`} />
            }
          <div dangerouslySetInnerHTML={{ __html: book.description }}></div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </Fragment>
  );
};

export default Book;
