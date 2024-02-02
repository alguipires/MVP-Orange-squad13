import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import "./BotaoSalvarModal.css"
import { FormToAddProject } from '../Modal/Modal';

function BotaoSalvarModal() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen} className='buttonModal'>Adicionar Projeto</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={{ 
          position: 'absolute',
          width: 800,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}>

          <FormToAddProject />
        </Box>
      </Modal>
    </div>
  );
}

export default BotaoSalvarModal;
