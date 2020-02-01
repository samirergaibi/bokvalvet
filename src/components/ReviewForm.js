/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FirebaseContext } from "./Firebase";

import addReview from "../database/addReview";
import ErrorMsg from "./ErrorMsg";
import PrimaryButton from "./PrimaryButton";

const ReviewForm = ({ bookId, isVisible }) => {
  const { user } = useContext(FirebaseContext);
  const [reviewInput, setReviewInput] = useState("");
  const [rating, setRating] = useState(0);
  const [errorMsg, setErrorMsg] = useState();
  function createRating() {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesomeIcon
          onClick={() => {
            setRating(i);
          }}
          key={`create-rating-${i}`}
          icon="star"
          css={{ color: rating < i ? "#d6d6d6" : "#ffd27d", cursor: "pointer" }}
        />
      );
    }
    return stars;
  }
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (rating < 1) {
          setErrorMsg(
            "Var god och betygsätt boken genom att klicka på stjärnorna."
          );
        } else if (!reviewInput) {
          setErrorMsg("Var god och skriv en recension.");
        } else {
          addReview(
            bookId,
            rating,
            reviewInput,
            user.uid,
            user.photoURL,
            user.displayName
          );
          setReviewInput("");
          setRating(0);
        }
      }}
      css={{
        margin: "10px 0",
        padding: "0 0 15px 0",
        maxHeight: isVisible ? "500px" : "0",
        overflow: "hidden",
        transition: "all 0.4s ease"
      }}
    >
      <div>
        <p css={{ display: "inline-block" }}>Betyg:</p>
        <span css={{ marginLeft: "5px", "& svg": { marginLeft: "5px" } }}>
          {
            createRating()
          }
        </span>
      </div>
      <div>
        <label htmlFor="review" css={{ display: "block" }}>
          Recension:
        </label>
        <textarea
          value={reviewInput}
          onChange={e => {
            setReviewInput(e.target.value);
          }}
          id="review"
          maxLength="5000"
          css={{
            height: "20vh",
            width: "90%",
            margin: "10px auto auto auto"
          }}
        ></textarea>
        <ErrorMsg msg={errorMsg} />
      </div>
      <PrimaryButton type="submit">Skicka</PrimaryButton>
    </form>
  );
};

export default ReviewForm;
