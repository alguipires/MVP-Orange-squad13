import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import validator from 'validator';
import { createNewUser } from '../../api/axiosInstance';
import { useNavigate } from 'react-router-dom';
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './formLogin.css';
import './formRegister.css';
import Button from '../Button/Button';

const FormRegister = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();

  const inputValidation = () => {
    const nameValidation = validator.isLength(name, { min: 1 });
    const lastNameValidation = validator.isLength(lastName, { min: 1 });
    const emailValidation = validator.isEmail(email);
    const passwordValidation = validator.isLength(password, { min: 5 });
    if (
      emailValidation &&
      passwordValidation &&
      nameValidation &&
      lastNameValidation
    ) {
      setIsDisabled(false);
    }
  };

  const handleChange = ({ target: { value } }, setState) => {
    setState(value);
    inputValidation();
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async () => {
    const isValidUser = await createNewUser(name, lastName, email, password);

    if (isValidUser?.token) {
      // salvar o token em algum local
      navigate('/');
    }

    if (isValidUser?.message) {
      alert(isValidUser.message);
    }
  };

  return (
    <form className="form_login">
      <div className="container_name_and_lastname">
        <TextField
          required
          id="outlined-required"
          label="Nome"
          className="input_name"
          onChange={(e) => handleChange(e, setName)}
        />

        <TextField
          required
          id="outlined-required"
          label="Sobrenome"
          className="input_lastname"
          onChange={(e) => handleChange(e, setLastName)}
        />
      </div>

      <TextField
        id="outlined-basic"
        label="Email address"
        variant="outlined"
        className="input_email"
        onChange={(e) => handleChange(e, setEmail)}
      />
      <FormControl style={{ marginTop: 25 }}>
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
          className="input_password"
          onChange={(e) => handleChange(e, setPassword)}
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
          className="button_login"
          value="cadastrar"
          isDisabled={isDisabled}
          onClick={handleSubmit}
        />
      </FormControl>
    </form>
  );
};

export default FormRegister;
