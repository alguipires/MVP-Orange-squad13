import React from 'react';
// import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, useMediaQuery } from '@mui/material';
// import Modal from '../Modal/Modal';
import useStore from '../../zustand/store';
import './BasicCard2.css';
import formattedDate from '../../utils/formatedData';

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   pt: 2,
//   px: 4,
//   pb: 3,
// };

export default function BasicCard({projectId, url, tag, createdAt}) {
  const [openModal,
    user,
    idProject,
    updateIdProject,
    updateOpenModal, 
    openVisualizerModalProject, 
    updateOpenVisualizerModalProject
  ] = useStore((state) => [
    state.openModal,
    state.user,
    state.idProject,
    state.updateIdProject,
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

  const openModalVisualizeProject = (id) => {
    updateIdProject(id);
    updateOpenVisualizerModalProject(!openVisualizerModalProject);
  };

  // const handleUpload = (event) => {
  //   // Lógica de upload de arquivo aqui
  //   console.log("Arquivo enviado:", event.target.files[0]);
  // };

  console.log('idProject:', idProject);

  return (
    <div className='container_info_project'>
        <CardActionArea
          sx={{ width: isSmallScreen ? 312 : 389, height: 258 }}
          className='img_modal_project'
          onClick={isProject ? () => openModalVisualizeProject(projectId) : openModalCreateProject}
        >
          {!isProject && 
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
          }

          {!isProject ? 
            <CardContent>
                <Typography sx={{ fontSize: 12, textAlign: 'center' }}>
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
              <div
              className='tag_project'>
                {tag}
              </div>
            </div>
        </div>
      }

    </div>
  );
}
