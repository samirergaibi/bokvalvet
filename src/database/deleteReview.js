import { db } from "../components/Firebase";

function deleteReview(reviewId){
  db.collection("reviews").doc(reviewId).delete();
}

export default deleteReview;