import { db } from "../components/Firebase";

function deleteBookFromVault(userId, bookId) {
  db.collection("vaultBooks")
    .where("user_id", "==", userId)
    .where("book_id", "==", bookId)
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        doc.ref.delete();
      });
    })
    .catch(err => {
      console.log("Error getting documents: ", err);
    });
}

export default deleteBookFromVault;
