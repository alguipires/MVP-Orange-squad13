import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app } from '../services/firebaseConfig';
import { createContext, useEffect, useState } from 'react';
import {
  getSavedUser,
  removeUser,
  saveUser,
} from '../utils/sessionStorageLogin';
import { Navigate } from 'react-router-dom';
import { loginWithGoogle } from '../api/axiosInstance';
import useStore from '../zustand/store';

const provider = new GoogleAuthProvider();

export const AuthGoogleContext = createContext({});

const AuthGoogleProvider = ({ children }) => {
  const [currentUser, updateCurrentUser] = useStore((state) => [
    state.currentUser,
    state.updateCurrentUser,
  ]);
  const [token, setToken] = useState(null);
  const [tokenBackend, setTokenBackend] = useState(null);

  const auth = getAuth(app);

  useEffect(() => {
    const token = getSavedUser('@AuthFirebase:token');
    const user = getSavedUser('@AuthFirebase:user');
    const tokenBackend = getSavedUser('@AuthBackend:token');
    const userBackend = getSavedUser('@AuthBackend:user');

    if (Object.keys(token).length > 0 && Object.keys(user).length > 0) {
      updateCurrentUser(user);
      return;
    }

    if (Object.keys(tokenBackend).length > 0 && Object.keys(userBackend).length > 0) {
      updateCurrentUser(userBackend);
      return;
    }
  }, [tokenBackend, token]);

  const signInGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        updateCurrentUser(user);
        setToken(token);
        loginWithGoogle(token, user);
        saveUser('@AuthFirebase:token', token);
        saveUser('@AuthFirebase:user', user);
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
        const email = error.customData.email;
        console.log(email);
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(credential);
      });
  };

  const signOutGoogle = () => {
    removeUser('@AuthFirebase:token');
    removeUser('@AuthFirebase:user');
    removeUser('@AuthBackend:token');
    updateCurrentUser(null);

    return <Navigate to="/" />;
  };

  return (
    <AuthGoogleContext.Provider
      value={{
        signInGoogle,
        signed: !!currentUser,
        currentUser,
        signOutGoogle,
        setTokenBackend,
      }}
    >
      {children}
    </AuthGoogleContext.Provider>
  );
};

export default AuthGoogleProvider;
