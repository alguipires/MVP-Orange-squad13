import { useContext } from 'react'; 
import Button from "../Button/Button";
import { AuthGoogleContext } from '../../contexts/authGoogle';
import { Navigate } from 'react-router-dom';

const GoogleLogin = () => {
  const { signInGoogle, signed } = useContext(AuthGoogleContext);

  const signedWithGoogle = async () => {
    await signInGoogle();
  }

  if (!signed) {
    return (
      <div>
        <Button 
          value='Entrar com Google'
          onClick={ signedWithGoogle }
        />
      </div>
    );
  } else {
    return <Navigate to="/portifolio" />;
  }
};

export default GoogleLogin;