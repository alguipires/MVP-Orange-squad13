import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { FormControl, 
        IconButton, 
        InputAdornment, 
        InputLabel, 
        OutlinedInput } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './formLogin.css';
import './formRegister.css';
import Button from '../Button/Button';

const FormRegister = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <form  className='form_login'>

    <div className='container_name_and_lastname'>
      <TextField
        required
        id="outlined-required"
        label="Nome"
        className='input_name'
      />

      <TextField
        required
        id="outlined-required"
        label="Sobrenome"
        className='input_lastname'
      />
    </div>

    <TextField 
      id="outlined-basic" 
      label="Email address" 
      variant="outlined" 
      className='input_email'
    />
    <FormControl style={ { marginTop: 25 } }>

          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            className='input_password'
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
          />

        </FormControl>
  </form>
  )
}

export default FormRegister;