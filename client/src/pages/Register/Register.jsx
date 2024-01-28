import React from 'react';
import Form from '../../components/Form/FormRegister';
import Alert from '@mui/material/Alert';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import './register.css';

import imageRegister from '../../assets/images/img_register.png';
import useStore from '../../zustand/store';

const Register = () => {
  const [ isHidden ] = useStore((state) => 
  [state.isHidden]
  );

  console.log(isHidden);
  return (
    <section className='container_img_form' >

      <div className='container_img'>
        <img src={ imageRegister } alt="Imagem do cadastro" />
      </div>
      
      <section className='container_register_form'>

      {!isHidden && 
        <Alert iconMapping={{
            success: <CheckCircleOutlineIcon fontSize="inherit" /> }} 
            variant="filled" className='alert'
            >
          Cadastro feito com sucesso
        </Alert>
      }

        <h1>Cadastre-se</h1>
          
        
        <div className='container_form'>


        <Form />
        </div>

      </section>
      


    </section>
  );
}

export default Register;