/** @jsx jsx */
import { jsx } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import dateToString from "../utils/dateToString";

const Review = ({ userReview }) => {
  console.log(userReview);
  const { user_name, user_img, rating, review, date } = userReview;
  function createRating() {
    let ratingArr = [];
    for (let i = 0; i < rating; i++) {
      ratingArr.push(<FontAwesomeIcon key={`star-${i}`} icon="star" />);
    }
    return ratingArr;
  }
  return (
    <div
      css={{
        padding: "20px 10px",
        backgroundColor: "#fbfbfb",
        borderRadius: "10px",
        border: "1px solid #eaeaea"
      }}
    >
      <div
        css={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          borderBottom: "1px solid #eaeaea"
        }}
      >
        <img src={user_img} alt={`${user_img} profile`} />
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
          letterSpacing: "1px"
        }}
      >
        {review}
      </p>
    </div>
  );
};

export default Review;
