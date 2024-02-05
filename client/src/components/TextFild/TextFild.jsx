import React from 'react';
import TextField from '@mui/material/TextField';
import './TextFild.css';
import { useMediaQuery } from '@mui/material';
import useStore from '../../zustand/store';

export default function TextFieldDemo() {
  const [updateInputSearch] = useStore((state) => [
    state.updateInputSearch,
  ]);
  const isSmallScreen = useMediaQuery('(max-width:768px)');

  const handleChange = ({ target: { value } }, setState) => {
    setState(value);
  };

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
        onChange={(e) => handleChange(e, updateInputSearch)}
      />
  );
}
