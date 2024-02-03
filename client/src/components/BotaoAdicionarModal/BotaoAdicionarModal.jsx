import React from 'react';
import Button from '@mui/material/Button';
import "./BotaoAdicionarModal.css"
import useStore from '../../zustand/store';


function BotaoSalvarModal() {
  const [ updateOpenModal, updateCloseModal,updateOpenModalConfirmacao, updateOpenModal2  ] = useStore((state) => 
  [ state.updateOpenModal, state.updateCloseModal, state.updateOpenModalConfirmacao, state.updateOpenModal2 ]
  );

  const handleOpen = () => {
    updateOpenModal(true);
    updateCloseModal(false);
  };

  const handleClose = () => {
    updateOpenModal(false);
    updateCloseModal(true);
  };

  const handleOpen2 = () => {
    updateOpenModalConfirmacao(true);
  };

  const handleOpen3 = () => {
    updateOpenModal2(true);
  };
  console.log(handleOpen2, handleOpen3,handleClose )


  return (
    <div>
      <Button onClick={handleOpen} className='buttonModal' >Adicionar Projeto</Button>
      
    </div>
  );
}



export default BotaoSalvarModal;
