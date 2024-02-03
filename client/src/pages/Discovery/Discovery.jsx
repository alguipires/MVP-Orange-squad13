import React, { useEffect, useState } from 'react';
import TextField from '../../components/TextFild/TextFild';
import { allProjects } from '../../api/axiosInstance';
import BasicCard from '../../components/BasicCard2/BasicCard2';
import AppBar from '../../components/AppBar/AppBar';

const Discovery = () => {
  const [projects, setProjects] = useState([]); 

  useEffect(() => {
    const loadingProjects = async () => {
      const allProjectsDB = await allProjects();
      setProjects(allProjectsDB);
    }
    loadingProjects();
  }, []);

  return (
    <section>
      <AppBar />

      <div className='container_title_discovery'>
        <h1>Junte-se à comunidade de inovação, inspiração e descobertas, transformando experiências em conexões inesquecíveis</h1>
      </div>

      <TextField />
      
      {projects.rows && projects.rows.map(({id, url, tag, createdAt}, index) => (
        <BasicCard
          key={id} 
          projectId={id}
          index={index}
          url={url} 
          tag={tag} 
          createdAt={createdAt}  
        />
      ))}

    </section>
  );
};

export default Discovery;