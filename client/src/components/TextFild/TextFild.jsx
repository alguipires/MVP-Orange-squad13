import React from 'react';
import TextField from '@mui/material/TextField';
import "./TexFild.css";


export default function TextFieldDemo() {

  return (
    <div className="buscarTags">
        <TextField id="buscarTags"
          hiddenLabel
          label="Buscar Tags"
          variant="outlined"
          size="medium"
        />
    </div>
  );
}