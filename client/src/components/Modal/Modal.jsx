import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextFieldDemo from '../TextFild/TextFild';
import BasicCard2 from '../BasicCard2/BasicCard2'

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
    marginBottom: 8, // Ajuste conforme necessário para espaçamento entre os textos
  };

  return (
    <div>
      <Button onClick={handleOpen}style={{ width: 389, height: 245}}>
        <img 
          src="https://i.pinimg.com/564x/b9/51/3e/b9513e7050cedff6d53e6ea0cd5a2dc1.jpg"
          alt="Criar Projeto"
          style={{ width: '50px', height: '50px' }}
        />
      <p style={textoStyle}>Texto1</p>
      <p style={textoStyle}>Texto2</p>
      <p style={textoStyle}>Texto3</p>
        </Button>
      <Modal
        open={open}
        onClose={handleClose}
        
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 800 }}>
        <h1 >Adicionar Projefo</h1>
        <TextFieldDemo/>
        <BasicCard2/>         
        </Box>
      </Modal>
    </div>
  );
}