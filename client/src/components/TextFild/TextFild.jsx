import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import "./TexFild.css";


export default function TextFieldDemo() {

  return (
    <div class="buscarTags">
        <TextField id="buscarTags"
          hiddenLabel
          label="Buscar Tags"
          variant="outlined"
          size="medium"
        />
    </div>
  );
}