/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment, useState, useEffect, useContext } from "react";

import { db, FirebaseContext } from "./Firebase";
import Review from "./Review";
import SecondaryButton from "./SecondaryButton";
import ReviewForm from "./ReviewForm";
import mq from "../utils/mediaQueries";

const ReviewsContainer = ({ bookId }) => {
  const { user } = useContext(FirebaseContext);
  const [isVisible, setIsVisible] = useState(false);
  const [reviews, setReviews] = useState();
  useEffect(() => {
    const unsubscribe = db
      .collection("reviews")
      .where("book_id", "==", bookId)
      .orderBy("date", "desc")
      .onSnapshot(snapshot => {
        let allReviews = [];
        snapshot.forEach(doc => {
          allReviews.push({ ...doc.data(), review_id: doc.id });
        });
        setReviews(allReviews);
      });
    return unsubscribe;
  }, [bookId]);
  return (
    <div
      css={{
        width: "90%",
        margin: "5vh auto",
        [mq[2]]: {
          width: "80%"
        },
        [mq[5]]: {
          width: "70%"
        }
      }}
    >
      {user ? (
        <Fragment>
          <SecondaryButton
            onClick={() => {
              setIsVisible(prev => !prev);
            }}
          >
            Skriv en recension
          </SecondaryButton>
          <ReviewForm bookId={bookId} isVisible={isVisible} />
        </Fragment>
      ) : (
        <SecondaryButton disabled css={{ margin: "20px auto" }}>
          Skriv en recension
        </SecondaryButton>
      )}
      {reviews &&
        reviews.map(review => {
          return (
            <div
              key={review.review_id}
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
