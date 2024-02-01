import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, useMediaQuery } from '@mui/material';
import Modal from '../Modal/Modal';
import useStore from '../../zustand/store';
import './BasicCard2.css';

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

export default function BasicCard({url, tag, createdAt}) {
  const [openModal, updateOpenModal] = useStore((state) => [
    state.openModal,
    state.updateOpenModal,
  ]);
  const isProject = !!url && !!tag && !!createdAt;
  const isSmallScreen = useMediaQuery('(max-width:768px)');

  const noProjectImage = 'https://i.pinimg.com/564x/b9/51/3e/b9513e7050cedff6d53e6ea0cd5a2dc1.jpg';

  const abrirModal = () => {
    updateOpenModal(!openModal);
  };

  // const handleUpload = (event) => {
  //   // Lógica de upload de arquivo aqui
  //   console.log("Arquivo enviado:", event.target.files[0]);
  // };

  return (
    <>
      <Card sx={{  width: isSmallScreen ? 312 : 389, height: 258, margin: 3 }}>
        <CardActionArea
          sx={{ width: isSmallScreen ? 312 : 389, height: 258 }}
          className='img_modal_project'
          onClick={abrirModal}
        >
          {!isProject && 
            <CardMedia
              style={{
                display: 'block',
                margin: 'auto',
                width: isSmallScreen ? '10%' : '20%',
                height: 'auto',
              }}
              component="img"
              image={isProject ? url : noProjectImage}
              alt="imagem do projeto"
            />
          }
          <CardContent>
            {!isProject  ? 
              <Typography sx={{ fontSize: 12, textAlign: 'center' }}>
                Adicione seu primeiro projeto
                <br />
                Compartilhe seu talento com milhares de pessoas
              </Typography>
              :
              <img src={url} alt="imagem do projeto" className='img_project'/>
            }

          </CardContent>
        </CardActionArea>
      </Card>

      <Modal />
    </>
  );
}
