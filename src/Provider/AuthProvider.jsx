import React, { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [loading , setLoading] = useState(true)
  // create user or register
  const signUp = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

//   update user profile 
const updateUserProfile = (user, name, photoURL) =>{
    updateProfile(user, {
        displayName: name,
        photoURL: photoURL
    })
    .then(() =>console.log('User profile updated'))
    .catch(error=>console.log(error))
}
  const user = { name: "alve" };
  const authInfo = { user, signUp, updateUserProfile };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
