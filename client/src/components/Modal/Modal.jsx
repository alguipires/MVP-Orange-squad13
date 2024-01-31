import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '../Button/Button';
import useStore from '../../zustand/store';
import { TextField } from '@mui/material';
import './Modal.css'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


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
    <Card sx={{ width: 389, height: 258, }}>
      <CardActionArea sx={{ maxWidth: 389, height: 258 }} >
        <CardMedia
           style={{ display: "block", margin: "auto", width: "10%", height: "auto", }}
           component="img"
           image="https://i.pinimg.com/564x/b9/51/3e/b9513e7050cedff6d53e6ea0cd5a2dc1.jpg"
           alt="imagem do projeto"
        />
          <Typography sx={{ fontSize: 12, textAlign: "center" }}>
          <input type="file"></input>
              Compartilhe seu talento com milhares de pessoas
          </Typography>
      </CardActionArea>
    </Card>
    <p>Visualizar publicação</p>
    
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
            <h1>Adicionar Projeto</h1>
            <p>Selecione o conteúdo que você deseja fazer upload</p>
            <FormToAddProject/>
            <Button className= "button_salvar"
              value="salvar"
              onClick={ closeModalFunc }
            />
            <Button className="button_cancelar"
              value="cancelar"
              onClick={ closeModalFunc }
          />
          </Box>
        </>
      </Modal>
    </div>
  );
}