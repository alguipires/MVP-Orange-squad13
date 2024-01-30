import * as React from 'react';
import './Logo.css';

// TODO verificar tamanho img
const Logo = () => {
  return (
    <div className="logo">
      {/* <h1>LOGO</h1> */}
      <img
        src="/assets/imgs/logo-orange.png"
        alt="Logo da Fcamara Orange Juice"
      />
    </div>
  );
};

export default Logo;
