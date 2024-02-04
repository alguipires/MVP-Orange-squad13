import React from 'react';
import TextField from '@mui/material/TextField';
import './TextFild.css';
import { useMediaQuery } from '@mui/material';

export default function TextFieldDemo() {
  const isSmallScreen = useMediaQuery('(max-width:768px)');

  return (
      <TextField
        id="buscarTags"
        hiddenLabel
        label="Buscar Tags"
        variant="outlined"
        size="medium"
        style={{
          width: isSmallScreen ? '100%' : '613px',
          marginLeft: isSmallScreen ? '0px' : '0px',
        }}
      />
  );
}
