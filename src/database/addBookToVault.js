import firebase, { db } from "../components/Firebase";

function addBookToVault(userId, bookId, title, imageUrl, authors){
  return db.collection("vaultBooks").doc(`${userId}&${bookId}`).set({
    user_id: userId,
    book_id: bookId,
    title,
    image_url: imageUrl,
    authors,
    added: firebase.firestore.FieldValue.serverTimestamp()
  })
    .then(() => {
      return true;
    })
    .catch(err => {
      console.error("Error adding document: ", err);
    })
}

export default addBookToVault;