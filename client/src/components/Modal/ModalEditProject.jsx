import React, { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import useStore from '../../zustand/store';
import { useMediaQuery } from '@mui/material';
import handleAlert from '../../utils/handleAlert';
import { TextField } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import validator from 'validator';
import { createNewProject } from '../../api/axiosInstance';
import { getSavedUser } from '../../utils/sessionStorageLogin';
import ModalPreview from './ModalPreview';
import { getFormattedMonthAndYear } from '../../utils/formatedData';
import './modalAddProject.css';

export default function FormToAddProject() {
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');
  const [token, setToken] = useState('');
  const [imgFile, setImgFile] = useState(null);
  const [isPreview, setIsPreview] = useState(false);
  const [
    openEditProjectModal,
    currentProjects,
    indexProject,
    indexEditProject,
    updateOpenEditProjectModal, 
    updateCurrentProject,
    updateOpenPreviewModal,
  ] = useStore((state) => [
    state.openEditProjectModal,
    state.currentProjects,
    state.indexProject,
    state.indexEditProject,
    state.updateOpenEditProjectModal,
    state.updateCurrentProject,
    state.updateOpenPreviewModal,
  ]);
  const inputRef = useRef(null);
  const isSmallScreen = useMediaQuery('(max-width:768px)');
  const noProjectImage =
  'https://i.pinimg.com/564x/b9/51/3e/b9513e7050cedff6d53e6ea0cd5a2dc1.jpg';

  const handleChange = ({ target: { value } }, setState) => {
    setState(value);
  };

  useEffect(() => {
    const getToken = async () => {
      const userTokenBackEnd = getSavedUser('@AuthBackend:token');
      const userTokenGoogle = getSavedUser('@AuthFirebase:token');

      if (userTokenBackEnd) {
        setToken(userTokenBackEnd);
      }
      if (userTokenGoogle) {
        setToken(userTokenGoogle);
      }
    };
    getToken();
  }, []);

  const isProject = currentProjects.length > 0;
  const projectToEdit = isProject && currentProjects[indexProject];

  useEffect(() => {
    if (projectToEdit !== null) {
      const projectToEdit = isProject && currentProjects[indexProject];
      setTitle(projectToEdit?.title);
      setTags(projectToEdit?.tag);
      setLink(projectToEdit?.url);
      setDescription(projectToEdit?.description);
      setImgFile(projectToEdit?.imgFile);
    }
  }, [indexEditProject, projectToEdit, currentProjects]);

  const inputValidation = () => {
    const titleValidation = validator.isLength(title, { min: 1 });
    const tagsValidation = validator.isLength(tags, { min: 1 });
    const linkValidation = validator.isLength(link, { min: 1 });
    const descriptionValidation = validator.isLength(description, { min: 1 });
    const imgFileValidation = imgFile && validator.isLength(imgFile, { min: 1 });


    if (!titleValidation && !tagsValidation && !linkValidation && !descriptionValidation && !imgFileValidation) {
      handleAlert('Preencha os campos');
      return;
    }

    if (!titleValidation) {
      handleAlert('Titulo inválido, insira um titulo com mais de 1 caractere');
    } 
    if (!tagsValidation) {
      handleAlert(
        'Tag inválida, insira uma sobrenoma com mais de 1 caractere'
      );
    }

    if (!linkValidation) {
      handleAlert('Link inválido, insira um link com mais de 1 caractere');
    }
    if (!descriptionValidation) {
      handleAlert('Descrição inválida, insira uma descrição com mais de 1 caractere');
    } 

    if (!imgFileValidation) {
      handleAlert('Imagem inválida, insira uma imagem');
    }
  }; 

  const handleButtonClick = (e) => {
    e.preventDefault();
    inputValidation();

    const titleValidation = validator.isLength(title, { min: 1 });
    const tagsValidation = validator.isLength(tags, { min: 1 });
    const linkValidation = validator.isLength(link, { min: 1 });
    const descriptionValidation = validator.isLength(description, { min: 1 });
    const imgFileValidation = imgFile && validator.isLength(imgFile, { min: 1 });

    if  ( titleValidation && tagsValidation && linkValidation && descriptionValidation && imgFileValidation ) {
          handleSubmitRegister();
    }
  };

  const handleSubmitRegister = async () => {
    const saveTagsString = tags.replace(/ /g, ',');

    const projectToSave = {
      title,
      tag: saveTagsString,
      url: link,
      description,
      imgFile,
    };

    const isValidProject = await createNewProject(projectToSave, token);

    if (isValidProject?.message) {
      handleAlert(isValidProject.message);
      return;
    }
  };


  const previewProject = () => {
    const preProject = {
      title,
      tag: tags,
      url: link,
      description,
      imgFile,
    };

    updateCurrentProject(preProject);

    updateOpenPreviewModal(true);

    setIsPreview(!isPreview);
  };

  const handleCardClick = () => {
    inputRef.current.click();
  };
  const handleFileChange = (event) => {
    const arquivo = event.target.files[0];

    if (arquivo) {
      const urlImagem = URL.createObjectURL(arquivo);
      setImgFile(urlImagem);
    }
  };


  const closeModal = () => {
    setTitle('');
    setTags('');
    setLink('');
    setDescription('');
    setImgFile(null);
    updateOpenEditProjectModal(!openEditProjectModal);
  };

  const style = {
    position: 'absolute',
    top: isSmallScreen ? '55%' : '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    left: '50%',
    width: isSmallScreen ? '90vw' : 890,
    height: isSmallScreen ? '85vh' : 522,
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  

  return (
    <>
    <Modal
      open={ openEditProjectModal }
      onClose={ closeModal }
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <section className="container_modal_project">
        <Box sx={{ ...style, border: 'none' }}>
          <header>
            <h5 className="titulo">Adicionar Projeto</h5>
          </header>

          <div className="container_info_modal_add_project">
            <div className="container_subtitle_add_image_buttons">
              <p className="subtitulo">
                Selecione o conteúdo que você deseja fazer upload
              </p>
              <Card>
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
                      aspectRatio: '4/3',
                      width: imgFile ? '100%' :'10%',
                      backgroundSize: 'cover',
                      height: 'auto',
                    }}
                    component="img"
                    image={imgFile ? imgFile : noProjectImage}
                    alt="imagem do projeto"
                  />
                  {!imgFile && 
                    <p style={{ position: 'relative', top: 30 }}>
                      Compartilhe seu talento com milhares de pessoas
                    </p>
                  }
                </CardActionArea>
              </Card>
                <button
                  href="visualização "
                  className="visualizar"
                  onClick={ previewProject }
                >
                  Visualizar Publicação
                </button>

              <div className="buttons_wrapper">
                <Button
                  variant="contained"
                  color="warning"
                  value="salvar"
                  type="submit"
                  className="button_salvar"
                  onClick={ handleButtonClick }
                >
                  Salvar
                </Button>
                <Button
                  value="cancelar"
                  variant="contained"
                  className="button_cancelar"
                  onClick={ closeModal }
                >
                  Cancelar
                </Button>
              </div>
            </div>

            <div className="container_box_modal">
              <TextField
                id="outlined-multiline-flexible"
                className="inputs_box_modal"
                label="Título"
                value={title}
                variant="outlined"
                onChange={(e) => handleChange(e, setTitle)}
                style={{
                  width: '100%',
                  marginBottom: '7px',
                  marginLeft: isSmallScreen ? '0px' : '5px',
                }}
              />
              <TextField
                id="outlined-multiline-flexible"
                className="inputs_box_modal"
                label="Tags"
                value={tags}
                variant="outlined"
                onChange={(e) => handleChange(e, setTags)}
                style={{
                  width: '100%',
                  marginBottom: '7px',
                  marginLeft: isSmallScreen ? '0px' : '5px',
                }}
              />
              <TextField
                id="outlined-textarea"
                className="inputs_box_modal"
                label="Links"
                value={link}
                placeholder="Placeholder"
                variant="outlined"
                onChange={(e) => handleChange(e, setLink)}
                style={{
                  width: '100%',
                  marginBottom: '7px',
                  marginLeft: isSmallScreen ? '0px' : '5px',
                }}
              />
              <TextField
                id="outlined-multiline-static"
                className="inputs_box_modal input_description"
                value={description}
                label="Descrição"
                multiline
                rows={3}
                onChange={(e) => handleChange(e, setDescription)}
                style={{ width: '100%', height: '35px', marginLeft: isSmallScreen ? '0px' : '5px', }}
              />
            </div>
          </div>
        </Box>
      </section>      
    </Modal>
    {isPreview && 
      <ModalPreview 
        tag={tags}
        title={title}
        link={link}
        description={description}
        urlImg={imgFile}
        createdAt={getFormattedMonthAndYear()}
    />}
    </>
  );
}
