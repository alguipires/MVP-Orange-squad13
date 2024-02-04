import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import useStore from '../../zustand/store';
import { Button, useMediaQuery } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './modal2.css'

export function ModalDeletado() {
    const isSmallScreen = useMediaQuery('(max-width:768px)');
    const [updateOpenDeleteSuccessModal] = useStore((state) => 
    [state.updateOpenDeleteSuccessModal ]
    );
  
  
    const handleClose = () => {
      updateOpenDeleteSuccessModal(false);
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
      height: isSmallScreen ? '85vh' : 230,
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
        
          <div className='modalTitulo'>
            <h2>Projeto Deletado com Sucesso!</h2>
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
  export function OpenModalDeletado() {
    const [ openDeleteSuccessModal, updateOpenDeleteSuccessModal  ] = useStore((state) => 
    [ state.openDeleteSuccessModal, state.updateOpenDeleteSuccessModal  ]
    );
    
    const handleClose = () => {
      updateOpenDeleteSuccessModal(false);
    };
    
    return (
      <div>
        <Modal
          open={openDeleteSuccessModal}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
            <ModalDeletado/>  
        </Modal>
      </div>
    );
  }
  

export default OpenModalDeletado;
