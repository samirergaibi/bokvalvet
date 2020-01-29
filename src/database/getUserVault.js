import { db } from "../components/Firebase";

function getUserVault(id) {
  return db.collection("vaultBooks")
    .where("user_id", "==", id)
    .orderBy("added", "asc")
    .onSnapshot(querySnapshot => {
      let allBooks = [];
      querySnapshot.forEach(doc => {
        allBooks.push(doc.data());
      });
      allBooks.reverse();
      return allBooks;
    })
}

export default getUserVault;
