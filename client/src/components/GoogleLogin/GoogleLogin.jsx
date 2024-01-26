import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../services/firebaseConfig";
import Button from "../Button/Button";

const provider = new GoogleAuthProvider();

const GoogleLogin = () => {
  const auth = getAuth(app);

  const signInGoogle = () => {
      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
          console.log(user);
        }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.customData.email;
          const credential = GoogleAuthProvider.credentialFromError(error);
        });
  };

  return (
    <div>
      <Button 
        value='Entrar com Google'
        onClick={ signInGoogle }
      />
    </div>
  );
};

export default GoogleLogin;