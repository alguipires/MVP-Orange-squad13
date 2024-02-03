import React, { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '../Button/Button';
import useStore from '../../zustand/store';
import { TextField } from '@mui/material';
import './Modal.css';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import validator from 'validator';
import { createNewProject } from '../../api/axiosInstance';

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

export function FormToAddProject() {
  // alvaro>>>
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');
  const [imgFile, setImgFile] = useState(null);
  const [updateCurrentProject] = useStore((state) => [
    state.updateCurrentProject,
  ]);
  // const navigate = useNavigate();

  const handleChange = ({ target: { value } }, setState) => {
    setState(value);
    console.log('atualizado>> ', value); //TODO retirar console
  };

  //TODO fazer abaixo <>>>>>>
  const handleSubmitRegister = async () => {
    const isValidProject = await createNewProject(
      title,
      tags,
      link,
      description,
      imgFile
    );

    console.log('logissss... ', isValidProject); //TODO retirar log
  };

  //TODO fazer validador

  //TODO verificar importação do componente para funcionar o buttononclick
  const handleButtonClick = () => {
    /* inputValidation();

    const titleValidation = validator.isLength(title, { min: 1 });
    const tagsValidation = validator.isLength(tags, { min: 1 });
    const linkValidation = validator.isLength(link, { min: 1 });
    const descriptionValidation = validator.isLength(description, { min: 1 });
    const imgFileValidation = validator.isLength(imgFile, { min: 1 });

    if (
      titleValidation &&
      tagsValidation &&
      linkValidation &&
      descriptionValidation &&
      imgFileValidation
    ) {
      handleSubmitRegister();
    } */

    handleSubmitRegister(); //TODO retirar apos fazer validação
  };

  const preViewProject = () => {
    const preProject = {
      title,
      tag: tags,
      url: link,
      description,
      imgFile,
    };

    updateCurrentProject(preProject);
  };

  /*   const inputValidation = () => {
    const titleValidation = validator.isLength(title, { min: 1 });
    const tagsValidation = validator.isLength(tags, { min: 1 });
    const linkValidation = validator.isLength(link, { min: 1 });
    const descriptionValidation = validator.isLength(description, { min: 1 });
    const imgFileValidation = validator.isLength(imgFile, { min: 1 });


    if (!title && !tags && !link && !description && !imgFile) {
      handleAlert('Preencha os campos');
      return;
    }
    //TODO continuar fazendo
    if (!titleValidation) {
      handleAlert('Titulo inválido, insira um titulo com mais de 1 caractere');
      setErrorName(true);
    } else {
      setErrorName(false);
    }

    if (!lastNameValidation) {
      handleAlert(
        'Sobrenome inválido, insira um sobrenome com mais de 1 caractere'
      );
      setErrorLastName(true);
    } else {
      setErrorLastName(false);
    }

    if (!emailValidation) {
      handleAlert('Email inválido');
      setErrorEmail(true);
    } else {
      setErrorEmail(false);
    }
    if (!passwordValidation) {
      handleAlert('A senha deve possuir um mínimo de 5 caracteres');
      setErrorPassword(true);
    } else {
      setErrorPassword(false);
    }
  }; */

  // alvaro^^

  const inputRef = useRef(null);

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
      setImgFile(urlImagem);
    }
  };

  return (
    <section className="container_modal_project">
      <div>
        <p className="subtitulo">
          Selecione o conteúdo que você deseja fazer upload
        </p>
        <Card sx={{ width: 389, height: 258 }}>
          <CardActionArea
            sx={{
              maxWidth: 389,
              height: 258,
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#E6E9F2',
            }}
            onClick={handleCardClick}
          >
            <input
              type="file"
              accept="image/*"
              ref={inputRef}
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
            <CardMedia
              style={{
                display: 'block',
                marginBottom: '50px',
                width: '10%',
                height: 'auto',
                position: 'absolute',
              }}
              component="img"
              image={'/assets/imgs/fundo-sem-img.jpg'}
              alt="imagem do projeto"
            />
            <p style={{ position: 'relative', top: 30 }}>
              Compartilhe seu talento com milhares de pessoas
            </p>
            <CardMedia
              style={{
                display: 'block',
                marginBottom: imgFile ? 'auto' : '50px',
                width: imgFile ? '100%' : '10%',
                height: imgFile ? '100%' : 'auto',
                position: 'absolute',
              }}
              component="img"
              image={imgFile || '/assets/imgs/fundo-sem-img.jpg'}
              alt="imagem do projeto"
            />
          </CardActionArea>
        </Card>
        <a href="visualização " className="visualizar" onClick={preViewProject}>
          Visualizar Publicação
        </a>
      </div>

      <div className="container_box_modal">
        <TextField
          id="outlined-multiline-flexible"
          className="inputs_box_modal"
          label="Título"
          variant="outlined"
          onChange={(e) => handleChange(e, setTitle)}
          style={{ width: '324px', marginBottom: '7px', marginLeft: '15px' }}
        />
        <TextField
          id="outlined-multiline-flexible"
          className="inputs_box_modal"
          label="Tags"
          variant="outlined"
          onChange={(e) => handleChange(e, setTags)}
          style={{ width: '324px', marginBottom: '7px', marginLeft: '15px' }}
        />
        <TextField
          id="outlined-textarea"
          className="inputs_box_modal"
          label="Links"
          placeholder="Placeholder"
          variant="outlined"
          onChange={(e) => handleChange(e, setLink)}
          style={{ width: '324px', marginBottom: '7px', marginLeft: '15px' }}
        />
        <TextField
          id="outlined-multiline-static"
          className="inputs_box_modal input_description"
          label="Descrição"
          multiline
          rows={3}
          onChange={(e) => handleChange(e, setDescription)}
          style={{ width: '324px', height: '35px', marginLeft: '15px' }}
        />
      </div>
    </section>
  );
}

export default function NestedModal() {
  const [openModal, closeModal, updateOpenModal, updateCloseModal] = useStore(
    (state) => [
      state.openModal,
      state.closeModal,
      state.updateOpenModal,
      state.updateCloseModal,
    ]
  );

  console.log(openModal, closeModal);

  const closeModalFunc = () => {
    updateOpenModal(!openModal);
    updateCloseModal(!closeModal);
  };

  return (
    <div>
      <Modal
        open={openModal}
        onClose={closeModalFunc}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <>
          <Box sx={{ ...style, width: 800 }}>
            <header>
              <h5 className="titulo">Adicionar Projeto</h5>
            </header>
            <FormToAddProject />
            <Button
              className="button_salvar"
              value="salvar"
              onClick={handleButtonClick} //TODO verificar...
            />
            <Button
              className="button_cancelar"
              value="cancelar"
              onClick={closeModalFunc}
            />
          </Box>
        </>
      </Modal>
    </div>
  );
}
