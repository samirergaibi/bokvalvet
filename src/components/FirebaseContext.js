import { createContext } from "react";


const defaultFirebaseContext = {
  authRespReceived: false,
  user: null
}
const FirebaseContext = createContext(defaultFirebaseContext);

export default FirebaseContext;
