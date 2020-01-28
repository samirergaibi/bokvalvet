import { db } from "../components/Firebase";

function addBookToVault(userId, bookId, title, imageUrl, authors){
  db.collection("vaultBooks").doc(`${userId}&${bookId}`).set({
    user_id: userId,
    book_id: bookId,
    title,
    image_url: imageUrl,
    authors
  })
    .then(() => {
      console.log("Document added.");
    })
    .catch(err => {
      console.error("Error adding document: ", err);
    })
}

export default addBookToVault;