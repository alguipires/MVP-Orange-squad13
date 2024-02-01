import React, { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '../Button/Button';
import useStore from '../../zustand/store';
import { TextField } from '@mui/material';
import './Modal.css'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
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
  const inputRef = useRef(null);
  const [imagemSelecionada, setImagemSelecionada] = useState(null);


  /*const handleFileChange = (event) => {
    // Lógica para lidar com o arquivo selecionado
    const arquivo = event.target.files[0];
    console.log('Arquivo selecionado:', arquivo);

    // Aqui você pode adicionar lógica para processar a imagem
  };*/
  const handleCardClick = () => {
    // Ao clicar no CardActionArea, acionar o clique no input de arquivo
    inputRef.current.click();
  };
  const handleFileChange = (event) => {
    // Lógica para lidar com o arquivo selecionado
    const arquivo = event.target.files[0];
    
    // Atualizar o estado com o URL da imagem selecionada
    if (arquivo) {
      const urlImagem = URL.createObjectURL(arquivo);
      setImagemSelecionada(urlImagem);
    }
  };

  return(
    <section className='container_modal_project' >
    <div>

      <p className='subtitulo'>Selecione o conteúdo que você deseja fazer upload</p>
      <Card sx={{ width: 389, height: 258, }}>
        <CardActionArea sx={{ maxWidth: 389, height: 258, display: 'flex', flexDirection: 'column', backgroundColor: '#E6E9F2' }} onClick={handleCardClick}>
        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
          <CardMedia
            style={{ display: "block", marginBottom: "50px", width: "10%", height: "auto", position: 'absolute'}}
            component="img"
            image={"https://i.pinimg.com/564x/b9/51/3e/b9513e7050cedff6d53e6ea0cd5a2dc1.jpg"}
            alt="imagem do projeto"
            />
          <p style={{ position: 'relative', top: 30}}>Compartilhe seu talento com milhares de pessoas</p> 
          <CardMedia
            style={{ display: "block",
              marginBottom: imagemSelecionada ? 'auto' : "50px", 
              width: imagemSelecionada ? '100%' : '10%', 
              height: imagemSelecionada ? '100%' : 'auto',
              position: 'absolute'}}
            component="img"
            image={imagemSelecionada || "https://i.pinimg.com/564x/b9/51/3e/b9513e7050cedff6d53e6ea0cd5a2dc1.jpg"}
            alt="imagem do projeto"
          />
            
            
             
        </CardActionArea>
      </Card>
      <a  href="visualização " className='visualizar'>Visualizar Publicação</a>
    
    </div>
    
      <div className='container_box_modal'>
        <TextField
          id="outlined-multiline-flexible"
          className='inputs_box_modal'
          label="Título"
          variant='outlined'
          style={{ width: '324px', marginBottom: '7px', marginLeft: '15px' }}
        />
        <TextField
          id="outlined-multiline-flexible"
          className='inputs_box_modal'
          label="Tags"
          variant='outlined'
          style={{ width: '324px', marginBottom: '7px', marginLeft: '15px' }}
        />
        <TextField
          id="outlined-textarea"
          className='inputs_box_modal'
          label="Links"
          placeholder="Placeholder"
          variant='outlined'
          style={{ width: '324px', marginBottom: '7px', marginLeft: '15px' }}
        />
        <TextField
          id="outlined-multiline-static"
          className='inputs_box_modal input_description'
          label="Descrição"
          multiline
          rows={3}
          style={{ width: '324px', height: "35px", marginLeft: '15px'}}
        />
      </div>

    </section>
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
            <header >
              <h5 className='titulo'>Adicionar Projeto</h5>
            </header>
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