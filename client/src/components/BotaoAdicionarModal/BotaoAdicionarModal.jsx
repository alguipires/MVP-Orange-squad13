import React from 'react';
import Button from '@mui/material/Button';
import './BotaoAdicionarModal.css';
import useStore from '../../zustand/store';

function BotaoSalvarModal() {
  const [
    openModal,
    updateOpenModal,
  ] = useStore((state) => [
    state.openModal,
    state.updateOpenModal,
  ]);

  console.log('openModal', openModal);

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
