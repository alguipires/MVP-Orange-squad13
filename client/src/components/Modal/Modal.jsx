import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '../Button/Button';
import useStore from '../../zustand/store';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function NestedModal() {
  const [openModal, closeModal, updateOpenModal, updateCloseModal] = useStore(
    (state) => [
      state.openModal,
      state.closeModal,
      state.updateOpenModal,
      state.updateCloseModal,
    ]
  );

  console.log(openModal, closeModal);

  const closeModalFunc = () => {
    updateOpenModal(!openModal);
    updateCloseModal(!closeModal);
  };

  // const botaoStyle = {
  //   display: 'grid',
  //   placeItems: 'center',
  // };

  // const textoStyle = {
  //   marginBottom: 2, // Ajuste conforme necessário para espaçamento entre os textos
  // };

  return (
    <div>
      <Modal
        open={openModal}
        onClose={closeModalFunc}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <>
          <Box sx={{ ...style, width: 80 }}>
            <h1>Adicionar Projeoto</h1>
          </Box>
          <Button value="salvar" onClick={closeModalFunc} />

          <Button value="cancelar" onClick={closeModalFunc} />
        </>
      </Modal>
    </div>
  );
}
