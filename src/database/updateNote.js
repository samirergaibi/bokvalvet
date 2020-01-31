import { db } from "../components/Firebase";

function updateNote(userId, bookId, note) {
  db.collection("notes")
    .where("user_id", "==", userId)
    .where("book_id", "==", bookId)
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        db.collection("notes")
          .doc(doc.id)
          .update({ note });
      });
    });
}

export default updateNote;
