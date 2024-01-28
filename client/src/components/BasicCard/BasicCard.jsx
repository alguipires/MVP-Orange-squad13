import * as React from 'react';
import './BasicCard.css';


const projectsData = [
  { 
    id: 1, 
    title: 'Projeto 1', 
    description: 'Descrição do Projeto 1', 
    tag: 'tec',
    imageProject: 'https://example.com/image1.jpg'
  },
  { 
    id: 2, 
    title: 'Projeto 2', 
    description: 'Descrição do Projeto 2', 
    tag: 'designer',
    imageProject: 'https://example.com/image2.jpg'
  },
  { 
    id: 3, 
    title: 'Projeto 3', 
    description: 'Descrição do Projeto 3', 
    tag: 'ux',
    imageProject: 'https://example.com/image3.jpg'
  },
  { 
    id: 1, 
    title: 'Projeto 1', 
    description: 'Descrição do Projeto 1', 
    tag: 'ui',
    imageProject: 'https://example.com/image4.jpg'
  },
  { 
    id: 2, 
    title: 'Projeto 2', 
    description: 'Descrição do Projeto 2', 
    tag: 'dev',
    imageProject: 'https://example.com/image5.jpg'
  },

  // Adicione mais projetos conforme necessário
];

const Projects = () => {
    return (
      <section class="BasicCards">
           {projectsData.map((project) => (
            <div key={project.id}>
              <img />
              <div>
                <img />
                <p></p>
              </div>
              <div>

              </div>
            </div>
           ))}
      </section>
    );
  };
  
  export default Projects;