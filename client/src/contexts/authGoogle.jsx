import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../services/firebaseConfig";
import { createContext, useEffect, useState } from "react";
import { getSavedUser, removeUser, saveUser } from "../utils/sessionStorageLogin";
import { Navigate } from "react-router-dom";

const provider = new GoogleAuthProvider();

export const AuthGoogleContext = createContext({});

const AuthGoogleProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const auth = getAuth(app);

  useEffect(() => {
    const token = getSavedUser("@AuthFirebase:token");
    const user = getSavedUser("@AuthFirebase:user");
    
    if (Object.keys(token).length > 0 && Object.keys(user).length > 0) {
      setCurrentUser(user);
    }
    
  }, []);
  

  const signInGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        setCurrentUser(user);
        saveUser("@AuthFirebase:token", token);
        saveUser("@AuthFirebase:user", user);
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
    };

    const signOutGoogle = () => {
      removeUser("@AuthFirebase:token");
      removeUser("@AuthFirebase:user");
      setCurrentUser(null);

      return <Navigate to="/" />;
    }

    return (
      <AuthGoogleContext.Provider value={ { signInGoogle, signed: !!currentUser, currentUser, signOutGoogle } }>
        { children }
      </AuthGoogleContext.Provider>
    );
};

export default AuthGoogleProvider;