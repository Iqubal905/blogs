import AuthContext from '@/context/AuthContext';
import auth, { googleProvider } from '@/firebase/firebase.auth';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';

const AuthProviders = ({children}) => {

    const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    () => {
      unsubscribe();
    };
  }, []);

  const value = {
    user,
    logout,
    loading,
   googleLogin,
   createUser,
   signIn
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProviders;