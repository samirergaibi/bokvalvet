import { createContext } from "react";


const defaultFirebaseContext = {
  authRespReceived: false,
  user: null
}
const AuthContext = createContext(defaultFirebaseContext);

export default AuthContext;
