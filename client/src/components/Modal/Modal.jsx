import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '../Button/Button';
import useStore from '../../zustand/store';
import { TextField } from '@mui/material';
import './Modal.css'



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

export function FormToAddProject(){
  return(
<Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      
    >
      
      <div className='container_box_modal'>
        <TextField
          id="outlined-multiline-flexible"
          label="Título"
          multiline
          maxRows={4}
        />
        <TextField
        id="outlined-multiline-flexible"
        label="Tags"
        multiline
        maxRows={4}
        />
        <TextField
          id="outlined-textarea"
          label="Links"
          placeholder="Placeholder"
          multiline
        />
        <TextField
          id="outlined-multiline-static"
          label="Descrição"
          multiline
          rows={4}
          defaultValue="Default Value"
        />
      </div>
     
    </Box>
  )
}



export default function NestedModal() {
  const [ openModal, closeModal, updateOpenModal, updateCloseModal] = useStore((state) => 
  [ state.openModal, state.closeModal, state.updateOpenModal, state.updateCloseModal ]
  );

  console.log(openModal, closeModal)

  const closeModalFunc = () => {
    updateOpenModal(!openModal)
    updateCloseModal(!closeModal)
  }

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
        open={ openModal }
        onClose={ closeModalFunc }
        
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <>
          <Box sx={{ ...style, width: 800 }}>
            <h1 >Adicionar Projeto</h1>


            
            <FormToAddProject/>
  

            <Button 
              value="salvar"
              onClick={ closeModalFunc }
            />

            <Button 
              value="cancelar"
              onClick={ closeModalFunc }
          />
          </Box>
        </>
      </Modal>
    </div>
  );
}