import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Modal } from "@mui/material";
import Box from "@mui/material/Box";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function MultiActionAreaCard() {
  const [modalAberto, setModalAberto] = React.useState(false);

  const abrirModal = () => {
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
  };

  return (
    <div>
      <Card sx={{ maxWidth: 389, height: 245 }}>
        <CardActionArea 
        sx={{ maxWidth: 389, height: 245 }}
        onClick={abrirModal} >
        <CardMedia
            style={{ display: 'block', margin: 'auto', width: '20%', height: 'auto' }}
            component="img"
            image="https://i.pinimg.com/564x/b9/51/3e/b9513e7050cedff6d53e6ea0cd5a2dc1.jpg"
            alt="imagem do projeto"
        />
          <CardContent>
            <Typography  sx={{ fontSize: 12, textAlign: 'center'  }}>
            Adicione seu primeiro projeto
            <br/>
            Compartilhe seu talento com milhares de pessoas
            </Typography>
          </CardContent>
        </CardActionArea>

      </Card>

      <Modal open={modalAberto} onClose={fecharModal}>
        <div>
          <Box sx={{ ...style, width: 800 }}>
            <h1>Adicionar Projefo</h1>
          </Box>
          <Typography>Conteúdo do Modal...</Typography>
        </div>
      </Modal>
    </div>
  );
}
