import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import './BasicCard.css';

const projectsData = [
  { id: 1, title: 'Projeto 1', description: 'Descrição do Projeto 1' },
  { id: 2, title: 'Projeto 2', description: 'Descrição do Projeto 2' },
  { id: 3, title: 'Projeto 3', description: 'Descrição do Projeto 3' },
  { id: 1, title: 'Projeto 1', description: 'Descrição do Projeto 1' },
  { id: 2, title: 'Projeto 2', description: 'Descrição do Projeto 2' },

  // Adicione mais projetos conforme necessário
];

const BasicCard = () => {
  return (
    <Grid container spacing={2}>
      {projectsData.map((project) => (
        <Grid item key={project.id} xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                {project.title}
              </Typography>
              <Typography color="text.secondary">
                {project.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default BasicCard;
