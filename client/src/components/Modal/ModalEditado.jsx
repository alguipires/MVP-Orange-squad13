import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import useStore from '../../zustand/store';
import { Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import '../Modal2/Modal2.css'

export function ModalEditado() {
    const [updateOpenModal, updateOpenModal2, updateCloseModal2 ] = useStore((state) => 
    [state.updateOpenModal, state.updateOpenModal2, state.updateCloseModal2 ]
    );
  
  
    const handleClose = () => {
      updateOpenModal2(false);
      updateCloseModal2(true);
      updateOpenModal(false);
    };
  
  
    return (
      <Box className='caixaSucesso'>
      <section className='modalSucesso'>
        
          <div className='modalTitulo'>
            <h2>Edição Concluída com Sucesso!</h2>
          </div>
          <div className='modalImagen'>
            <CheckCircleIcon sx={{ color: "green",fontSize: 40,}} />
          </div>
          <div className='modalBotao'>
            <Button className='botaoVoltar' onClick={handleClose} variant="contained" color = "success" >Voltar Para Projetos</Button>
        
        </div>
      </section>
      </Box>
    );
  }
  export function OpenModalEditado() {
    const [ openModal2,updateOpenModal2, updateCloseModal2 ] = useStore((state) => 
    [ state.openModal2, state.updateOpenModal2, state.updateCloseModal2 ]
    );
  
    const handleOpen = () => {
      updateOpenModal2(true);
      updateCloseModal2(false);
    };
  
    const handleClose = () => {
      updateOpenModal2(false);
      updateCloseModal2(true);
    };
  
  
    return (
      <div>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          open={openModal2}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
            <ModalEditado/>  
        </Modal>
      </div>
    );
  }
  export default OpenModalEditado;