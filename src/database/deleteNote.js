import { db } from "../components/Firebase";

function deleteNote(noteId) {
  db.collection("notes")
    .doc(noteId)
    .delete()
    .catch(err => {
      console.log("Erorr deleting document: ", err);
    });
}

export default deleteNote;