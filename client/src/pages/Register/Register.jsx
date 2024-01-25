import React from 'react';
import Form from '../../components/Form/FormRegister';
import './register.css';

import imageRegister from '../../assets/images/img_register.png';

const Register = () => {
  return (
    <section className='container_img_form' >

      <div className='container_img'>
        <img src={ imageRegister } alt="Imagem do cadastro" />
      </div>
      
      <section className='container_register_form'>

        <h1>Cadastre-se</h1>
          
        
        <div className='container_form'>


        <Form />
        </div>

      </section>
      


    </section>
  );
}

export default Register;