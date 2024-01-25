import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import validator from 'validator';
import { checkUser } from '../../api/axiosInstance';
import { useNavigate } from 'react-router-dom';
import { FormControl, 
        IconButton, 
        InputAdornment, 
        InputLabel, 
        OutlinedInput } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './formLogin.css';
import Button from '../Button/Button';

const FormLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();


  const inputValidation = () => {
    const emailValidation = validator.isEmail(email);
    const passwordValidation = validator.isLength(password, { min: 5 });
    if (emailValidation && passwordValidation) {
      setIsDisabled(false);
    }
  };

  const handleChange = ({ target: { value } }, setState) => {
    setState(value);
    inputValidation();
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmitLogin = async () => {
    const isValidUser = await checkUser(email, password)

    if (isValidUser?.token) {
      // salvar o token em algum local
      navigate('/portifolio');
    }

    if (isValidUser?.message) {
      alert(isValidUser.message);
    }
  };

  const handleSubmitRegister = async () => {
      navigate('/register');
  }   



  return (
    <form  className='form_login'>

    <TextField 
      id="outlined-basic" 
      label="Email address" 
      variant="outlined" 
      className='input_email'
      onChange={ (e) => handleChange(e, setEmail) }
    />
    <FormControl style={ { marginTop: 25 } }>

          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            className='input_password'
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
            value='entrar'
            disabled={ isDisabled }  
            onClick={ handleSubmitLogin }
          />

          <Button 
            className='button_register'
            value='Cadastre-se'
            onClick={ handleSubmitRegister }
          />

        </FormControl>
  </form>
  )
}

export default FormLogin;