/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { db, FirebaseContext } from "./Firebase";
import Review from "./Review";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import addReview from "../database/addReview";
import ErrorMsg from "./ErrorMsg";

const ReviewsContainer = ({ bookId }) => {
  const { user } = useContext(FirebaseContext);
  const [isVisible, setIsVisible] = useState(false);
  const [reviews, setReviews] = useState();
  const [reviewInput, setReviewInput] = useState("");
  const [rating, setRating] = useState(0);
  const [errorMsg, setErrorMsg] = useState();
  useEffect(() => {
    const unsubscribe = db
      .collection("reviews")
      .where("book_id", "==", bookId)
      .onSnapshot(snapshot => {
        let allReviews = [];
        snapshot.forEach(doc => {
          allReviews.push(doc.data());
        });
        setReviews(allReviews);
      });
    return unsubscribe;
  }, [bookId]);
  return (
    <div
      css={{
        width: "90%",
        margin: "5vh auto"
      }}
    >
      <h3 css={{ textAlign: "left" }}>Recensioner</h3>
      {user ? (
        <SecondaryButton
          onClick={() => {
            setIsVisible(prev => !prev);
          }}
        >
          Skriv en recension
        </SecondaryButton>
      ) : (
        <SecondaryButton disabled css={{ margin: "20px auto" }} >
          Skriv en recension
        </SecondaryButton>
      )}
      {user && (
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
              <FontAwesomeIcon
                onClick={() => {
                  setRating(1);
                }}
                icon="star"
                css={{ color: rating < 1 ? "#d6d6d6" : "#ffd27d" }}
              />
              <FontAwesomeIcon
                onClick={() => {
                  setRating(2);
                }}
                icon="star"
                css={{ color: rating < 2 ? "#d6d6d6" : "#ffd27d" }}
              />
              <FontAwesomeIcon
                onClick={() => {
                  setRating(3);
                }}
                icon="star"
                css={{ color: rating < 3 ? "#d6d6d6" : "#ffd27d" }}
              />
              <FontAwesomeIcon
                onClick={() => {
                  setRating(4);
                }}
                icon="star"
                css={{ color: rating < 4 ? "#d6d6d6" : "#ffd27d" }}
              />
              <FontAwesomeIcon
                onClick={() => {
                  setRating(5);
                }}
                icon="star"
                css={{ color: rating < 5 ? "#d6d6d6" : "#ffd27d" }}
              />
            </span>
          </div>
          <div>
            <label htmlFor="review">Recension:</label>
            <textarea
              value={reviewInput}
              onChange={e => {
                setReviewInput(e.target.value);
              }}
              id="review"
              maxLength="5000"
              css={{
                height: "20vh",
                width: "80%",
                margin: "10px auto auto auto"
              }}
            ></textarea>
            <ErrorMsg msg={errorMsg} />
          </div>
          <PrimaryButton type="submit">Skicka</PrimaryButton>
        </form>
      )}
      {reviews &&
        reviews.map((review, i) => {
          return (
            <div
              key={`${review.book_id}-${i}`}
              css={{
                margin: "10px auto"
              }}
            >
              <Review userReview={review} />
            </div>
          );
        })}
    </div>
  );
};

export default ReviewsContainer;
