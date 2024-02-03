import React, { useState } from 'react';
// import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Menu, MenuItem, useMediaQuery } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
// import Modal from '../Modal/Modal';
import useStore from '../../zustand/store';
import './BasicCard2.css';
import formattedDate from '../../utils/formatedData';

export default function BasicCard({ projectId, index, url, tag, createdAt }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [
    openModal,
    user,
    discoveryPage,
    updateIndexProject,
    updateOpenModal,
    openVisualizerModalProject,
    updateOpenVisualizerModalProject,
    updateIndexDeleteProject,
    updateIndexEditProject,
  ] = useStore((state) => [
    state.openModal,
    state.user,
    state.discoveryPage,
    state.updateIndexProject,
    state.updateOpenModal,
    state.openVisualizerModalProject,
    state.updateOpenVisualizerModalProject,
    state.updateIndexDeleteProject,
    state.updateIndexEditProject,
  ]);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const editProject = (idEdit) => {
    setAnchorEl(null);
    updateIndexEditProject(idEdit);
  };

  const deleteProject = (idDelete) => {
    setAnchorEl(null);
    updateIndexDeleteProject(idDelete);
  };

  // console.log('user:', user);
  const isProject = !!url && !!tag && !!createdAt;
  const isSmallScreen = useMediaQuery('(max-width:768px)');

  const noProjectImage = '/assets/imgs/fundo-sem-img.jpg';

  const openModalCreateProject = () => {
    updateOpenModal(!openModal);
  };

  const openModalVisualizeProject = (indexChange) => {
    updateIndexProject(indexChange);
    updateOpenVisualizerModalProject(!openVisualizerModalProject);
  };

  // const handleUpload = (event) => {
  //   // Lógica de upload de arquivo aqui
  //   console.log("Arquivo enviado:", event.target.files[0]);
  // };
  console.log('discovery', discoveryPage);
  return (
    <div className="container_info_project">
      {isProject && (
        <div>
          {discoveryPage && (
            <button className="edit_icon" onClick={handleClick}>
              <EditIcon />
            </button>
          )}
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            style={{
              marginTop: 2,
              marginLeft: 20,
            }}
          >
            <MenuItem onClick={() => editProject(projectId)} id="edit_project">
              Editar
            </MenuItem>
            <MenuItem
              onClick={() => deleteProject(projectId)}
              id="delete_project"
            >
              Excluir
            </MenuItem>
          </Menu>
        </div>
      )}
      <CardActionArea
        sx={{ width: isSmallScreen ? 312 : 389, height: 258 }}
        className="img_modal_project"
        onClick={
          isProject
            ? () => openModalVisualizeProject(index)
            : openModalCreateProject
        }
      >
        {!isProject && (
          <CardMedia
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: isSmallScreen ? '10%' : '20%',
              justifyContent: 'center',
              alignItems: 'center',
              height: 'auto',
            }}
            component="img"
            image={isProject ? url : noProjectImage}
            alt="imagem do projeto"
          />
        )}

        {!isProject ? (
          <CardContent>
            <Typography sx={{ fontSize: 12, textAlign: 'center' }}>
              Adicione seu primeiro projeto
              <br />
              Compartilhe seu talento com milhares de pessoas
            </Typography>
          </CardContent>
        ) : (
          <div className="container_img_project">
            <img src={url} alt="imagem do projeto" />
          </div>
        )}
      </CardActionArea>
      {isProject && (
        <div className="container_avatar_date_tag">
          <div className="container_avatar_date">
            <div className="container_avatar_user">
              <img
                src={user.photoURL}
                alt="imagem do projeto"
                className="img_project"
              />
            </div>

            <div className="container_date_project">
              <div className="user_data">
                {user.displayName}
                <div className="bullet_point"></div>
                {formattedDate(createdAt)}
              </div>
            </div>
          </div>
          <div className="container_tag_project">
            <div className="tag_project">{tag}</div>
          </div>
        </div>
      )}
    </div>
  );
}
