import React, { useState } from 'react';
// import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Menu, MenuItem, useMediaQuery } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import ProjectPlaceholder from '../../assets/icons/project_placeholder.svg';
// import Modal from '../Modal/Modal';
import useStore from '../../zustand/store';
import './BasicCard.css';
import formattedDate from '../../utils/formatedData';
import { getRandomAvatar } from '../ProfileHome/ProfileHome';

export default function BasicCard({
  projectId,
  index,
  link,
  urlImg,
  tag,
  createdAt,
  userDBAvatar,
  userDBFristName,
  userDBLastName,
  userDBCreatedAt,
}) {
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
  const noProjectImage =
    'https://i.pinimg.com/564x/b9/51/3e/b9513e7050cedff6d53e6ea0cd5a2dc1.jpg';

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

  const isProject = !!link && !!tag && !!createdAt;
  const isSmallScreen = useMediaQuery('(max-width:768px)');

  const openModalCreateProject = () => {
    updateOpenModal(!openModal);
  };

  const openModalVisualizeProject = (indexChange) => {
    updateIndexProject(indexChange);
    updateOpenVisualizerModalProject(!openVisualizerModalProject);
  };

  console.log(' asdasdad', userDBAvatar);


  return (
    <div className="container_info_project">
      {isProject && (
        <div className="container_edit_icon">
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
        sx={{
          width: '100%',
          height: 258,
          backgroundColor: '#E6E9F2',
        }}
        className="img_modal_project"
        onClick={
          isProject
            ? () => openModalVisualizeProject(index)
            : openModalCreateProject
        }
      >
        {!isProject ? (
          <CardContent
            sx={{
              flexDirection: 'column',
            }}
            className="container_avatar_date_tag"
          >
            <img src={ProjectPlaceholder} />
            <Typography
              sx={{
                fontSize: isSmallScreen ? 12 : 14,
                textAlign: 'center',
                marginTop: 1,
                marginBottom: 1,
              }}
            >
              Adicione seu primeiro projeto.
            </Typography>
            <Typography
              sx={{
                fontSize: isSmallScreen ? 12 : 14,
                textAlign: 'center',
              }}
            >
              Compartilhe seu talento com milhares de pessoas.
            </Typography>
          </CardContent>
        ) : (
          <div className="container_img_project">
            <img src={urlImg || noProjectImage} alt="imagem do projeto" />
          </div>
        )}
      </CardActionArea>
      {isProject && (
        <div className="container_avatar_date_tag">
          <div className="container_avatar_date">
            <div className="container_avatar_user">
              <img
                src={!discoveryPage ? userDBAvatar : user.photoURL}
                alt="imagem do avatar"
                className="img_project"
              />
            </div>

            <div className="container_date_project">
              <div className="user_data">
                {!discoveryPage
                  ? `${userDBFristName} ${userDBLastName}`
                  : user.displayName}
                <div className="bullet_point"></div>
                {!discoveryPage
                  ? formattedDate(userDBCreatedAt)
                  : formattedDate(createdAt)}
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
