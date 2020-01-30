/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState, useEffect, useContext } from "react";

import Review from "./Review";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import { db, FirebaseContext } from "./Firebase";

const ReviewsContainer = ({ bookId }) => {
  const { user } = useContext(FirebaseContext);
  const [isVisible, setIsVisible] = useState(false);
  const [reviews, setReviews] = useState();
  useEffect(() => {
    const unsubscribe = db.collection("reviews").where("book_id", "==", bookId).onSnapshot(snapshot => {
      let allReviews = [];
      snapshot.forEach(doc => {
        allReviews.push(doc.data());
      })
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
      {
        user ?
        <SecondaryButton onClick={() => { setIsVisible(prev => !prev) }}>Skriv en recension</SecondaryButton> :
        <SecondaryButton disabled css={{ margin: "20px auto" }}>Skriv en recension</SecondaryButton>
      }
      {
        user &&
        <form css={{
          padding: "20px",
          maxHeight: isVisible ? "500px" : "0",
          overflow: "hidden",
          transition: "all 0.3s"
        }}>
          <textarea maxLength="5000" css={{
            height: "20vh",
            width: "80vw",
            margin: "20px auto auto auto"
          }}></textarea>
          <PrimaryButton type="submit">Skicka</PrimaryButton>
        </form>
      }
      {
        reviews &&
        reviews.map(review => {
          return(
            <Review userReview={review} />
          )
        })
      }
    </div>
  );
};

export default ReviewsContainer;
