import React from 'react';
import AppBar from '../AppBar/AppBar';
import './Portifolio.css';
import AvatarIcon from '../AvatarIcon/index';
import FormCardProjec from '../FormCardProject/FormCardProject';
import { TextField } from '@mui/material';

function Portifolio() {
  return (
    <section>
      <div>
        <AppBar />
      </div>
      <div>
        <AvatarIcon />
      </div>
      <div name="meusProjetos">Meus Projetos</div>
      <TextField />
      <FormCardProjec />
    </section>
  );
}
export default Portifolio;
