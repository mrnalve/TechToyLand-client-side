import React, { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
export const AuthContext = createContext();
const auth = getAuth();
const AuthProvider = ({ children }) => {
    const [loading , setLoading] = useState(true)
  // create user or register
  const signUp = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };


  const user = { name: "alve" };
  const authInfo = { user, signUp };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
