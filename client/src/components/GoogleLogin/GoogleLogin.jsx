import React from 'react';
import { useContext } from 'react'; 
import Button from "../Button/Button";
import { AuthGoogleContext } from '../../contexts/authGoogle';
import { Navigate } from 'react-router-dom';
import './googleLogin.css';
const GoogleLogin = () => {
  const { signInGoogle, signed } = useContext(AuthGoogleContext);

  const signedWithGoogle = async () => {
    await signInGoogle();
  }

  if (!signed) {
    return (
      <div>
        <Button 
          value={
            <>
              <svg width="18" height="18" viewBox="0 0 18 18" fill='none' xmlns="http://www.w3.org/2000/svg">
                <g id="logo googleg 48dp">
                <path id="Shape" fillRule="evenodd" clipRule="evenodd" d="M17.64 9.20468C17.64 8.5665 17.5827 7.95286 17.4764 7.36377H9V10.8451H13.8436C13.635 11.9701 13.0009 12.9233 12.0477 13.5615V15.8197H14.9564C16.6582 14.2529 17.64 11.9456 17.64 9.20468Z" fill="#4285F4"/>
                <path id="Shape_2" fillRule="evenodd" clipRule="evenodd" d="M8.99976 18C11.4298 18 13.467 17.1941 14.9561 15.8195L12.0475 13.5613C11.2416 14.1013 10.2107 14.4204 8.99976 14.4204C6.65567 14.4204 4.67158 12.8372 3.96385 10.71H0.957031V13.0418C2.43794 15.9831 5.48158 18 8.99976 18Z" fill="#34A853"/>
                <path id="Shape_3" fillRule="evenodd" clipRule="evenodd" d="M3.96409 10.7098C3.78409 10.1698 3.68182 9.59301 3.68182 8.99983C3.68182 8.40664 3.78409 7.82983 3.96409 7.28983V4.95801H0.957273C0.347727 6.17301 0 7.54755 0 8.99983C0 10.4521 0.347727 11.8266 0.957273 13.0416L3.96409 10.7098Z" fill="#FBBC05"/>
                <path id="Shape_4" fillRule="evenodd" clipRule="evenodd" d="M8.99976 3.57955C10.3211 3.57955 11.5075 4.03364 12.4402 4.92545L15.0216 2.34409C13.4629 0.891818 11.4257 0 8.99976 0C5.48158 0 2.43794 2.01682 0.957031 4.95818L3.96385 7.29C4.67158 5.16273 6.65567 3.57955 8.99976 3.57955Z" fill="#EA4335"/>
                </g>
              </svg>
              <p>Entrar com Google</p>
            </>
          }
          onClick={ signedWithGoogle }
          className='button_sing_google'
        />
      </div>
    );
  } else {
    return <Navigate to="/portifolio" />;
  }
};

export default GoogleLogin;