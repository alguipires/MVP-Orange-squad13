import React from 'react';
import Button from '@mui/material/Button';
import './BotaoAdicionarModal.css';
import useStore from '../../zustand/store';

function BotaoSalvarModal() {
  const [
    updateOpenModal,
  ] = useStore((state) => [
    state.updateOpenModal,
  ]);

  const handleOpen = () => {
    updateOpenModal(true);
  };

  return (
    <Button onClick={handleOpen} className="buttonModal">
      Adicionar Projeto
    </Button>
  );
}

export default BotaoSalvarModal;
