import FirebaseContext from "./FirebaseContext";
import firebase from "../setupFirebase";

export default firebase;

export { FirebaseContext };

export const db = firebase.firestore();