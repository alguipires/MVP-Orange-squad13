import React, { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import validator from 'validator';
import { checkUser } from '../../api/axiosInstance';
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
import Button from '@mui/material/Button';
import { saveUser } from '../../utils/sessionStorageLogin';
import { AuthGoogleContext } from '../../contexts/authGoogle';
import handleAlert from '../../utils/handleAlert';

const FormLogin = () => {
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { setTokenBackend } = useContext(AuthGoogleContext);
  const navigate = useNavigate();

  const inputValidation = () => {
    const emailValidation = validator.isEmail(email);
    const passwordValidation = validator.isLength(password, { min: 5 });

    if (!email && !password) {
      handleAlert('Preencha os campos');
      return;
    }

    if (!emailValidation && !passwordValidation) {
      handleAlert(
        'Email inválido e a senha deve possuir um mínimo de 5 caracteres'
      );
      setErrorEmail(true);
      setErrorPassword(true);
      return;
    }

    if (!emailValidation) {
      handleAlert('Email inválido');
      setErrorEmail(true);
    } else {
      setErrorEmail(false);
    }

    if (!passwordValidation) {
      handleAlert('A senha deve possuir um mínimo de 5 caracteres');
      setErrorPassword(true);
    } else {
      setErrorPassword(false);
    }
  };

  const handleChange = ({ target: { value } }, setState) => {
    setState(value);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmitLogin = async () => {
    const isValidUser = await checkUser(email, password);

    if (isValidUser.token !== undefined && isValidUser.message === undefined) {
      saveUser('@AuthBackend:token', isValidUser.token);
      setTokenBackend(isValidUser.token);
    }

    if (isValidUser.message !== undefined) {
      handleAlert(isValidUser.message);
    }
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    inputValidation();

    const emailValidation = validator.isEmail(email);
    const passwordValidation = validator.isLength(password, { min: 5 });

    if (emailValidation && passwordValidation) {
      handleSubmitLogin();
    }
  };

  const handleSubmitRegister = async () => {
    navigate('/register');
  };

  return (
    <form className="form_login" onSubmit={handleButtonClick}>
      <TextField
        error={errorEmail}
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
          error={errorPassword}
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
        <div className="login_buttons_wrapper">
          <Button
            className="button_salvar"
            variant="contained"
            color="warning"
            value="entrar"
            onClick={handleButtonClick}
            type="submit"
          >
            Entrar
          </Button>

          <button
            className="button_register"
            value="Cadastre-se"
            type="button"
            onClick={handleSubmitRegister}
          >
            Cadastre-se
          </button>
        </div>
      </FormControl>
    </form>
  );
};

export default FormLogin;
