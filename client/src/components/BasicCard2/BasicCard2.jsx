import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Modal from '../Modal/Modal'
import useStore from "../../zustand/store";



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

export default function MultiActionAreaCard() {
  const [ openModal,  updateOpenModal] = useStore((state) => 
  [ state.openModal, state.updateOpenModal ]
  );

  const abrirModal = () => {
    updateOpenModal(!openModal)
  };

  // const handleUpload = (event) => {
  //   // Lógica de upload de arquivo aqui
  //   console.log("Arquivo enviado:", event.target.files[0]);
  // };

  return (
    <div>
      <Card sx={{ width: 389, height: 258, margin:3 }}>
        <CardActionArea sx={{ maxWidth: 389, height: 258 }} onClick={abrirModal}>
          <CardMedia
            style={{ display: "block", margin: "auto", width: "10%", height: "auto", }}
            component="img"
            image="https://i.pinimg.com/564x/b9/51/3e/b9513e7050cedff6d53e6ea0cd5a2dc1.jpg"
            alt="imagem do projeto"
          />
          <CardContent>
            <Typography sx={{ fontSize: 12, textAlign: "center" }}>
              Adicione seu primeiro projeto
              <br />
              Compartilhe seu talento com milhares de pessoas
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Modal/>
    </div>
  );
}
