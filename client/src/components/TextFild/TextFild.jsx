import React from 'react';
import TextField from '@mui/material/TextField';
import "./TextFild.css";
import { useMediaQuery } from '@mui/material';


export default function TextFieldDemo() {

const isSmallScreen = useMediaQuery('(max-width:768px)');

  return (
    <div className="buscarTags">
        <TextField id="buscarTags"
          hiddenLabel
          label="Buscar Tags"
          variant="outlined"
          size="medium"
          style={{ width: isSmallScreen ? '312px' : '513px', marginLeft: isSmallScreen ? '0px' : '0px'}}
        />
    </div>
  );
}