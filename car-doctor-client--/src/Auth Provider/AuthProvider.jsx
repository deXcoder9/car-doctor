import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../../firebase.config";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      // console.log("changed fjslkdfsaklfj, ", user)
      setUser(user);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = { user, setUser };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
