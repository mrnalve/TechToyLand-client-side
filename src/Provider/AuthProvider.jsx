import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  // create user or register
  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   sign in or login method
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // google sign in
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  //   log out
  const logOut = () => {
    return signOut(auth);
  };
  //   onAuthState change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe;
    };
  }, []);

  //   update user profile
  const updateUserProfile = (user, name, photoURL) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => console.log("User profile updated"))
      .catch((error) => console.log(error));
  };

  const authInfo = {
    user,
    loading,
    signUp,
    googleSignIn,
    login,
    updateUserProfile,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
