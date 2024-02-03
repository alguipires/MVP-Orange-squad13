import React from 'react';
// import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, useMediaQuery } from '@mui/material';
// import Modal from '../Modal/Modal';
import useStore from '../../zustand/store';
import './BasicCard2.css';

export default function BasicCard({url, tag, createdAt}) {
  const [openModal,
    user, 
    updateOpenModal, 
    openVisualizerModalProject, 
    updateOpenVisualizerModalProject
  ] = useStore((state) => [
    state.openModal,
    state.user,
    state.updateOpenModal,
    state.openVisualizerModalProject,
    state.updateOpenVisualizerModalProject,
  ]); 

  console.log('user:', user);
  const isProject = !!url && !!tag && !!createdAt;
  const isSmallScreen = useMediaQuery('(max-width:768px)');

  const noProjectImage = 'https://i.pinimg.com/564x/b9/51/3e/b9513e7050cedff6d53e6ea0cd5a2dc1.jpg';

  const openModalCreateProject = () => {
    updateOpenModal(!openModal);
  };

  const openModalVisualizeProject = () => {
    updateOpenVisualizerModalProject(!openVisualizerModalProject);
  };


  return (
    <div className='container_info_project'>
        <CardActionArea
          sx={{ width: isSmallScreen ? 312 : 500, height: 300 }}
          className='img_modal_project'
          onClick={isProject ? openModalVisualizeProject : openModalCreateProject}
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
        <div className='container_avatar_date'>
          <div className='container_avatar_user'>
            <img src={user.photoURL} alt='imagem do projeto' className='img_project' />
          </div>

          <div className='container_date_project'>
            <p>{createdAt}</p>
          </div>  
        </div>
      }

    </div>
  );
}
