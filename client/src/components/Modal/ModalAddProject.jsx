import React, { useRef, useState } from 'react';
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
import { createNewProject, createNewProjectWithGoogle } from '../../api/axiosInstance';
import { getSavedUser } from '../../utils/sessionStorageLogin';
import ModalPreview from './ModalPreview';
import { getFormattedMonthAndYear } from '../../utils/formatedData';
import './modalAddProject.css';

export default function FormToAddProject() {
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');
  const [imgUrl, setImgUrl] = useState(null);
  const [imgFile, setImgFile] = useState(null);
  const [isPreview, setIsPreview] = useState(false);
  const [
    openModal,
    updateOpenModal,
    updateCurrentProject,
    updateOpenPreviewModal,
    currentProjects,
    updateCurrentProjects,
    updateOpenEditSuccessModal,
  ] = useStore((state) => [
    state.openModal,
    state.updateOpenModal,
    state.updateCurrentProject,
    state.updateOpenPreviewModal,
    state.currentProjects,
    state.updateCurrentProjects,
    state.updateOpenEditSuccessModal,
  ]);
  const inputRef = useRef(null);
  const isSmallScreen = useMediaQuery('(max-width:768px)');
  const noProjectImage =
    'https://i.pinimg.com/564x/b9/51/3e/b9513e7050cedff6d53e6ea0cd5a2dc1.jpg';

  const isImage = imgUrl ? imgUrl : noProjectImage;

  const handleChange = ({ target: { value } }, setState) => {
    setState(value);
  };

  const inputValidation = () => {
    const titleValidation = validator.isLength(title, { min: 1 });
    const tagsValidation = validator.isLength(tags, { min: 1 });
    const linkValidation = validator.isLength(link, { min: 1 });
    const descriptionValidation = validator.isLength(description, { min: 1 });
    const imgUrlValidation = imgUrl && validator.isLength(imgUrl, { min: 1 });

    if (
      !titleValidation &&
      !tagsValidation &&
      !linkValidation &&
      !descriptionValidation &&
      !imgUrlValidation
    ) {
      handleAlert('Preencha os campos');
      return;
    }

    if (!titleValidation) {
      handleAlert('Titulo inválido, insira um titulo com mais de 1 caractere');
    }
    if (!tagsValidation) {
      handleAlert('Tag inválida, insira uma sobrenoma com mais de 1 caractere');
    }

    if (!linkValidation) {
      handleAlert('Link inválido, insira um link com mais de 1 caractere');
    }
    if (!descriptionValidation) {
      handleAlert(
        'Descrição inválida, insira uma descrição com mais de 1 caractere'
      );
    }

    if (!imgUrlValidation) {
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
    const imgUrlValidation = imgUrl && validator.isLength(imgUrl, { min: 1 });

    if (
      titleValidation &&
      tagsValidation &&
      linkValidation &&
      descriptionValidation &&
      imgUrlValidation
    ) {
      handleSubmitRegister();
    }
  };

  const handleSubmitRegister = async () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('tag', tags);
    formData.append('url', link);
    formData.append('description', description);
    console.log('imgFile', imgFile);
    formData.append('imgFile', imgFile);

    const token = await getSavedUser('@AuthFirebase:token');
    const user = await getSavedUser('@AuthFirebase:user');
    const tokenBackend = await getSavedUser('@AuthBackend:token');

    const newProject = {
      title,
      tag: tags,
      url: link,
      description,
      imgUrl,
    };

    if (Object.keys(tokenBackend).length !== 0){
      const isValidProject = await createNewProject(formData, tokenBackend);

      if (isValidProject?.message) {
        handleAlert(isValidProject.message);
        return;
      }
      updateOpenEditSuccessModal(true);
      updateCurrentProjects([...currentProjects, newProject]);
      return;
    }
    if (Object.keys(token).length !== 0 && Object.keys(user).length !== 0){
      const uuid = user.uid;
      const isValidProject = await createNewProjectWithGoogle(formData, uuid, token);

      if (isValidProject?.message) {
        handleAlert(isValidProject.message);
        return;
      }
      updateOpenEditSuccessModal(true);
      updateCurrentProjects([...currentProjects, newProject]);
    }

    closeModal();
  };

  const previewProject = () => {
    const preProject = {
      title,
      tag: tags,
      url: link,
      description,
      imgUrl,
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
      setImgUrl(urlImagem);
      setImgFile(arquivo);
    }
  };

  const closeModal = () => {
    setTitle('');
    setTags('');
    setLink('');
    setDescription('');
    setImgUrl(null);
    setImgFile(null);
    updateOpenModal(!openModal);
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
    height: isSmallScreen ? 'auto' : 522,
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
        open={openModal}
        onClose={closeModal}
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
                      height: isSmallScreen ? 200 : 258,
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
                        width: imgFile ? '100%' : '10%',
                        backgroundSize: 'cover',
                        height: 'auto',
                      }}
                      component="img"
                      image={isImage}
                      alt="imagem do projeto"
                    />
                    {!imgUrl && (
                      <p style={{ position: 'relative', top: 30 }}>
                        Compartilhe seu talento com milhares de pessoas
                      </p>
                    )}
                  </CardActionArea>
                </Card>
                <button
                  href="visualização "
                  className="visualizar"
                  onClick={previewProject}
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
                    onClick={handleButtonClick}
                  >
                    Salvar
                  </Button>
                  <Button
                    value="cancelar"
                    variant="contained"
                    className="button_cancelar"
                    onClick={closeModal}
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
                  label="Descrição"
                  multiline
                  rows={3}
                  onChange={(e) => handleChange(e, setDescription)}
                  style={{
                    width: '100%',
                    height: '35px',
                    marginLeft: isSmallScreen ? '0px' : '5px',
                  }}
                />
              </div>
            </div>
          </Box>
        </section>
      </Modal>
      {isPreview && (
        <ModalPreview
          tag={tags}
          title={title}
          link={link}
          description={description}
          imgUrl={imgUrl}
          createdAt={getFormattedMonthAndYear()}
        />
      )}
    </>
  );
}
