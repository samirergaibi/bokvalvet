import { db } from "../components/Firebase";

function addReview(bookId, rating, review, userId, userImg, userName){
  db.collection("reviews").add({
    book_id: bookId,
    date: new Date(),
    rating,
    review,
    user_id: userId,
    user_img: userImg,
    user_name: userName
  }).catch(err => {
    console.log("Error adding document: ", err);
  })
}

export default addReview;