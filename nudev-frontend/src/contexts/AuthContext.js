import React, { useContext, useState, useEffect } from "react";

import { auth } from "../services/firebase";

console.log(auth);

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = async (email, password, username, photo) => {
    await auth.createUserWithEmailAndPassword(email, password);
    const user = auth.currentUser;
    return user;
    // return user.updateProfile({
    //   displayName: username,
    //   photoURL: photo,
    // });
  };

  const login = async (email, password) => {
    return await auth.signInWithEmailAndPassword(email, password);
  };

  const logout = () => {
    return auth.signOut();
  };

  const resetPassword = (email) => {
    return auth.sendPasswordResetEmail(email);
  };

  const updatePassword = (password) => {
    return currentUser.updatePassword(password);
  };

  const updatePhotoURL = (photoURL) => {
    const user = auth.currentUser;
    return user.updateProfile({
      photoURL: photoURL,
    });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <>Loading..</>;
  }

  const value = {
    currentUser,
    signup,
    login,
    logout,
    updatePhotoURL,
    updatePassword,
  };

  return (
    <div>
      <AuthContext.Provider value={value}>
        {!loading && children}
      </AuthContext.Provider>
    </div>
  );
}

export const useAuthState = () => {
  const auth = useContext(AuthContext);
  return { ...auth, isAuthenticated: auth.user != null };
};
