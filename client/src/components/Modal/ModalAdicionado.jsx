import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import useStore from '../../zustand/store';
import { Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useMediaQuery } from '@mui/material';
import './modal2.css'

export function ModalAdicionado() {
  const [  updateOpenEditSuccessModal ] = useStore((state) => 
  [ state.updateOpenEditSuccessModal ]
  );
  const isSmallScreen = useMediaQuery('(max-width:768px)');
  
  const handleClose = () => {
    updateOpenEditSuccessModal(false);
  };
    const style = {
      position: 'absolute',
      top: isSmallScreen ? '55%' : '50%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      left: '50%',
      width: isSmallScreen ? '90vw' : 380,
      height: isSmallScreen ? '30vh' : 280,
      transform: 'translate(-50%, -50%)',
      bgcolor: '#FCFDFF',
      boxShadow: 2,
      zIndex: 2,
      pt: 2,
      px: 4,
      pb: 3,
    };
  
  
    return (
      <Box sx={{ ...style }}> 
      <section className='modalSucesso'>
        
          <div className='title_modal_add'>
            <h2>Projeto Adicionado com Sucesso!</h2>
          </div>
          <div className='modalImagen'>
            <CheckCircleIcon sx={{ color: "green",fontSize: 60,}} />
          </div>
          <div className='container_button_modal_add'>
            <Button id='button_back_to_projects_add' onClick={handleClose} variant="contained" >Voltar Para Projetos</Button>
        
        </div>
      </section>
      </Box>
      
    );
  }
  export function OpenModalAdicionado() {
    const [ openEditSuccessModal, updateOpenEditSuccessModal ] = useStore((state) => 
    [ state.openEditSuccessModal, state.updateOpenEditSuccessModal ]
    );
    
    const handleClose = () => {
      updateOpenEditSuccessModal(false);
    };
  
  
    return (
      <div>
        <Modal
          open={openEditSuccessModal}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
            <ModalAdicionado/>  
        </Modal>
      </div>
    );
  }

  export default OpenModalAdicionado