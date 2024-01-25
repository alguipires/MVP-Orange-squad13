import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { FormControl, 
        IconButton, 
        InputAdornment, 
        InputLabel, 
        OutlinedInput } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './form.css';
import Button from '../Button/Button';

function Form() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <form  className='form_login'>

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
            style={ { width: 493 } }
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
          />

          <Button 
            className='button_register'
            value='Cadastre-se'
          />
        </FormControl>
  </form>
  )
}

export default Form;