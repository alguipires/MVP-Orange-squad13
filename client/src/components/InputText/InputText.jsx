import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

//props id e placeholder
export default function InputText(props) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id={props.id} label={props.placeholder} variant="outlined" />
    </Box>
  );
}
