/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Fragment, useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import dateToString from "../utils/dateToString";
import { FirebaseContext } from "./Firebase";
import deleteReview from "../database/deleteReview";
import ConfirmPopup from "./ConfirmPopup";

const Review = ({ userReview }) => {
  const { user } = useContext(FirebaseContext);
  const { user_id, user_name, user_img, rating, review, date } = userReview;
  const [visible, setVisible] = useState(false);
  function createRating() {
    let ratingArr = [];
    for (let i = 0; i < rating; i++) {
      ratingArr.push(
        <FontAwesomeIcon
          key={`star-${i}`}
          icon="star"
          css={{ color: "#ffd27d" }}
        />
      );
    }
    return ratingArr;
  }
  return (
    <Fragment>
      <ConfirmPopup
        visible={visible}
        setVisible={setVisible}
        deleteFunc={() => {
          deleteReview(userReview.review_id);
        }}
        msg="Är du säker på att du vill ta bort din recension?"
      />
      <div
        css={{
          position: "relative",
          padding: "20px 10px",
          backgroundColor: "#fbfbfb",
          borderRadius: "10px",
          border: "1px solid #eaeaea"
        }}
      >
        {user && user.uid === user_id && (
          <button
            onClick={() => {
              setVisible(true);
            }}
            css={css`
              font-family: 'Raleway', sans-serif;
              position: absolute;
              bottom: 10px;
              right: 10px;
              border: none;
              background-color: transparent;
              outline: none;
              cursor: pointer;
              -webkit-tap-highlight-color: transparent;
            `}
          >
            <FontAwesomeIcon
              icon={["far", "trash-alt"]}
              css={{ fontSize: "14px", marginRight: "3px" }}
            />
            <span>Ta bort</span>
          </button>
        )}
        <div
          css={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            borderBottom: "1px solid #eaeaea"
          }}
        >
          <img
            src={user_img}
            alt={`${user_img} profile`}
            css={{ width: "50px", borderRadius: "50%" }}
          />
          <div>
            <p>{user_name}</p>
            <p>{createRating()}</p>
          </div>
          <p>{dateToString(date.toDate())}</p>
        </div>
        <p
          css={{
            margin: 0,
            padding: "20px 0",
            lineHeight: "1.6",
            letterSpacing: "1px",
            textAlign: "left"
          }}
        >
          {review}
        </p>
      </div>
    </Fragment>
  );
};

export default Review;
