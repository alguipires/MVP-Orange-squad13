import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextFieldDemo from '../TextFild/TextFild';


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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const botaoStyle = {
    display: 'grid',
    placeItems: 'center',
  };

  const textoStyle = {
    marginBottom: 2, // Ajuste conforme necessário para espaçamento entre os textos
  };

  return (
    <div>

      <Modal
        open={open}
        onClose={handleClose}
        
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 80 }}>
        <h1 >Adicionar Projeoo</h1>

       
        </Box>
      </Modal>
    </div>
  );
}