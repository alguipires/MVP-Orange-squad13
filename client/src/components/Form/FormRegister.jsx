import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import validator from 'validator';
import { createNewUser } from '../../api/axiosInstance';
import { useNavigate } from 'react-router-dom';
import { FormControl, 
        IconButton, 
        InputAdornment, 
        InputLabel, 
        OutlinedInput } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '../Button/Button';
import handleAlert from '../../utils/handleAlert';
import useStore from '../../zustand/store';
import './formLogin.css';
import './formRegister.css';

const FormRegister = () => {
  const [name, setName] = useState('');
  const [errorName, setErrorName] = useState(false);
  const [lastName, setLastName] = useState('');
  const [errorLastName, setErrorLastName] = useState(false);
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [ updateHidden ] = useStore((state) => 
  [ state.updateHidden ]
  );
  const navigate = useNavigate();

  const validateInputs = (validation, errorMessage, setError) => {
    if (!validation) {
      handleAlert(errorMessage);
      setError(true);
    } else {
      setError(false);
    }
  };

  const inputValidation = () => {
    const nameValidation = validator.isLength(name, { min: 2 });
    const lastNameValidation = validator.isLength(lastName, { min: 2 });
    const emailValidation = validator.isEmail(email);
    const passwordValidation = validator.isLength(password, { min: 5 });
    
    if (!name && !lastName && !email && !password) {
      handleAlert('Preencha os campos');
      return;
    }

    validateInputs(
      nameValidation,
      'Nome inválido, insira um nome com mais de 2 caracteres',
      setErrorName
    );

    validateInputs(
      lastNameValidation,
      'Sobrenome inválido, insira um sobrenome com mais de 2 caracteres',
      setErrorLastName
    );

    validateInputs(emailValidation, 'Email inválido', setErrorEmail);

    validateInputs(
      passwordValidation,
      'A senha deve possuir um mínimo de 5 caracteres',
      setErrorPassword
    );
  };

  const handleChange = ({ target: { value } }, setState) => {
    setState(value);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmitRegister = async () => {
    const isValidUser = await createNewUser(name, lastName, email, password)

    
    if (isValidUser.token !== undefined && isValidUser.message === undefined) {
      updateHidden(false);
      navigate('/');
    }

    if (isValidUser.message !== undefined) {
      handleAlert(isValidUser.message);
    }
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    inputValidation();

    const nameValidation = validator.isLength(name, { min: 1 });
    const lastNameValidation = validator.isLength(lastName, { min: 1 });
    const emailValidation = validator.isEmail(email); 
    const passwordValidation = validator.isLength(password, { min: 5 });

    if (emailValidation && passwordValidation && nameValidation && lastNameValidation) {
      handleSubmitRegister();
    }
  };

  return (
    <form  className='form_login' onSubmit={(e) => handleButtonClick(e)}>

    <div className='container_name_and_lastname'>
      <TextField
        required
        id="outlined-required"
        label="Nome"
        className='input_name'
        onChange={ (e) => handleChange(e, setName)}
        error={ errorName }
      />

      <TextField
        required
        id="outlined-required"
        label="Sobrenome"
        className='input_lastname'
        onChange={ (e) => handleChange(e, setLastName)}
        error={ errorLastName }
      />
    </div>

    <TextField 
      id="outlined-basic" 
      label="Email address" 
      variant="outlined" 
      className='input_email'
      onChange={ (e) => handleChange(e, setEmail) }
      error={ errorEmail }
    />
    <FormControl style={ { marginTop: 25 } }>

          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            className='input_password'
            error={ errorPassword }
            onChange={ (e) => handleChange(e, setPassword) }
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />

          <Button 
            className='button_login'
            value='cadastrar'
            onClick={ handleButtonClick }
            type='submit'
          />

        </FormControl>
  </form>
  )
}

export default FormRegister;