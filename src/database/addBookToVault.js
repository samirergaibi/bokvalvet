import { db } from "../components/Firebase";

function addBookToVault(userId, bookId, title, imageUrl, authors){
  return db.collection("books").doc(`${userId}&${bookId}`).set({
    user_id: userId,
    book_id: bookId,
    title,
    image_url: imageUrl,
    authors,
    added: new Date()
  })
    .then(() => {
      return true;
    })
    .catch(err => {
      console.error("Error adding document: ", err);
    })
}

export default addBookToVault;