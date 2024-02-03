import React, { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '../Button/Button';
import useStore from '../../zustand/store';
import { TextField } from '@mui/material';
import './Modal.css'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

//import BotaoSalvarModal from '../BotaoSalvarModal/BotaoSalvarModal';

var closeModalFunc=null;

export function FormToAddProject(){
  const inputRef = useRef(null);
  const [imagemSelecionada, setImagemSelecionada] = useState(null);
  
  const [ openModal, closeModal, updateOpenModal, updateCloseModal, updateOpenModal2] = useStore((state) => 
  [ state.openModal, state.closeModal, state.updateOpenModal, state.updateCloseModal, state.updateOpenModal2 ]
  );

  console.log(openModal, closeModal)
  closeModalFunc = () => {
    updateOpenModal(!openModal)
    updateCloseModal(!closeModal)
  }

  const handleCardClick = () => {
    inputRef.current.click();
  };
  const handleFileChange = (event) => {
    const arquivo = event.target.files[0];
    
    if (arquivo) {
      const urlImagem = URL.createObjectURL(arquivo);
      setImagemSelecionada(urlImagem);
    }
  };

  const handleSaveClick = () => {
    updateOpenModal(false)
    updateOpenModal2(true);
  };
  return(
    
    <section className='section_modal'>
      <div><h5 className='titulo'>Adicionar Projeto</h5></div>
      <div className='container_modal_project'> 
        <div className='div_area_card'>
            
            <p className='subtitulo' >Selecione o conteúdo que você deseja fazer upload</p>
          <Card className='card'sx={{ width: '100%'}}>
              <CardActionArea className="card_area"sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#E6E9F2' }} onClick={handleCardClick}>
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
              <p style={{ position: 'relative', top: 30, fontSize: 15}}>Compartilhe seu talento com milhares de pessoas</p> 
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

          <Button className= "button_salvar"
            value="salvar"
            onClick={ handleSaveClick }
            
          />
          <Button className="button_cancelar"
            value="cancelar"
            onClick={ closeModalFunc }
          />
        </div>
        
          <div className='container_box_modal'>
            <TextField
              id="outlined-multiline-flexible"
              className='inputs_box_modal'
              label="Título"
              variant='outlined'
              style={{ width: '100%', marginBottom: '7px' }}
            />
            <TextField
              id="outlined-multiline-flexible"
              className='inputs_box_modal'
              label="Tags"
              variant='outlined'
              style={{ width: '100%', marginBottom: '7px' }}
            />
            <TextField
              id="outlined-textarea"
              className='inputs_box_modal'
              label="Links"
              placeholder="Placeholder"
              variant='outlined'
              style={{ width: '100%', marginBottom: '7px' }}
            />
            <TextField
              id="outlined-multiline-static"
              className='inputs_box_modal input_description'
              label="Descrição"
              multiline
              rows={3}
              style={{ width: '100%', height: "35px"}}
            />
          </div>
      </div>
    </section>
  )
}

export function NestedModal() {
  const [ openModal,updateOpenModal, updateCloseModal ] = useStore((state) => 
  [ state.openModal, state.updateOpenModal, state.updateCloseModal ]
  );

  const handleClose = () => {
    updateOpenModal(false);
    updateCloseModal(true);
  };

  return (
    <React.Fragment>
    <div>
      <Modal
        open={ openModal }
        onClose={ handleClose }
        
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <>
          <Box className = "box_Form">
            <FormToAddProject/>          
          </Box>
        </>
      </Modal>
    </div>
    </React.Fragment>
  );
}
export default NestedModal;