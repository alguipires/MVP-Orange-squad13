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

export default function BasicCard({index, url, tag, createdAt}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openModal,
    user,
    indexProject,
    updateIndexProject,
    updateOpenModal, 
    openVisualizerModalProject, 
    updateOpenVisualizerModalProject
  ] = useStore((state) => [
    state.openModal,
    state.user,
    state.indexProject,
    state.updateIndexProject,
    state.updateOpenModal,
    state.openVisualizerModalProject,
    state.updateOpenVisualizerModalProject,
  ]); 

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // console.log('user:', user);
  const isProject = !!url && !!tag && !!createdAt;
  const isSmallScreen = useMediaQuery('(max-width:768px)');
  const noProjectImage = 'https://i.pinimg.com/564x/b9/51/3e/b9513e7050cedff6d53e6ea0cd5a2dc1.jpg';

  const openModalCreateProject = () => {
    updateOpenModal(!openModal);
  };

  const openModalVisualizeProject = (indexChange) => {
    console.log('indexChange:', indexChange);
    updateIndexProject(indexChange);
    updateOpenVisualizerModalProject(!openVisualizerModalProject);
  };


  console.log('index:', index);

  console.log('indexProject:', indexProject);
  
  return (
    <div className='container_info_project'>
        {isProject &&
          <div>
          <button className='edit_icon' onClick={handleClick} >
              <EditIcon />
          </button>
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
            <MenuItem 
              onClick={handleClose} 
              id='edit_project'
              style={{
                paddingRight: 120,
                transition: 'background-color 0.3s ease',
              }}
            >
              Editar
            </MenuItem>
            <MenuItem 
              onClick={handleClose} 
              id='delete_project'
              style={{ 
                paddingRight: 120, 
                transition: 'background-color 0.3s ease',
              }}
            >
              Excluir
            </MenuItem>
          </Menu>
        </div>
        }
        <CardActionArea
          sx={{ width: isSmallScreen ? 312 : 500, height: 300 }}
          className='img_modal_project'
          onClick={isProject ? () => openModalVisualizeProject(index) : openModalCreateProject}
        >
          {!isProject && 
            <CardMedia
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: isSmallScreen ? '10%' : '46px',
                justifyContent: 'center',
                alignItems: 'center',
                height: 'auto',
                marginLeft: '45%'
              }}
              component="img"
              image={isProject ? url : noProjectImage}
              alt="imagem do projeto"
            />
          }

          {!isProject ? 
            <CardContent>
                <Typography sx={{ fontSize: 15, textAlign: 'center' }}>
                  Adicione seu primeiro projeto
                  <br />
                  Compartilhe seu talento com milhares de pessoas
                </Typography>
            </CardContent>
            :
              <div className='container_img_project'>
                <img src={url} alt='imagem do projeto'/>
              </div>
          }
        </CardActionArea>
      {isProject &&  

      <div className='container_avatar_date_tag'>
          <div className='container_avatar_date'>
            <div className='container_avatar_user'>
              <img src={user.photoURL} alt='imagem do projeto' className='img_project' />
            </div>

            <div className='container_date_project'>
              <div className='user_data'>
                {user.displayName} 
                <div className='bullet_point'>
              </div>{formattedDate(createdAt)}</div>
            </div>  

          </div>
            <div className='container_tag_project'>
              <div className='tag_project'>
                {tag}
              </div>
            </div>
        </div>
      }

    </div>
  );
}
