import { createContext } from "react";


const defaultFirebaseContext = {
  authRespReceived: false,
  user: {}
}
export const UserContext = createContext(defaultFirebaseContext);
