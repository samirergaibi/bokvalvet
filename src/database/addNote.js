import { db } from "../components/Firebase";

function addNote(userId, bookId, note){
  db.collection("notes").add({
    user_id: userId,
    book_id: bookId,
    date: new Date(),
    note
  }).catch(err => {
    console.log("Error adding document: ", err);
  });
};

export default addNote;