import React, { useEffect, useState } from 'react';
import TextField from '../../components/TextFild/TextFild';
import { allProjects } from '../../api/axiosInstance';
import BasicCard from '../../components/BasicCard/BasicCard';
import AppBar from '../../components/AppBar/AppBar';
import './discovery.css';
import ModalToView from '../../components/Modal/ModalToView';
import useStore from '../../zustand/store';

const Discovery = () => {
  const [projects, setProjects] = useState([]);
  const [indexProject] = useStore((state) => [state.indexProject]);

  useEffect(() => {
    const loadingProjects = async () => {
      const allProjectsDB = await allProjects();
      setProjects(allProjectsDB);
    };
    loadingProjects();
  }, []);

  const containsProjects = projects?.rows?.length > 0;
  const projectByIndex = containsProjects && projects?.rows[indexProject];

  return (
    <section className="dicovery_container">
      <AppBar />

      <h1 className="text_discovery">
        Junte-se à comunidade de inovação, inspiração e descobertas,
        transformando experiências em conexões inesquecíveis
      </h1>

      <section className="container_projects_discovery">
        <div className="container_input_search">
          <TextField />
        </div>

        <div className="container_basic_card">
          {containsProjects &&
            projects?.rows?.map(
              ({ id, url, imgFile, tag, createdAt, users }, index) => {
                return (
                  <BasicCard
                    key={id}
                    projectId={id}
                    index={index}
                    link={url}
                    urlImg={imgFile}
                    tag={tag}
                    createdAt={createdAt}
                    userDBAvatar={users.avatar}
                    userDBFristName={users.firstName}
                    userDBLastName={users.lastName}
                    userDBCreatedAt={users.createdAt}
                  />
                );
              }
            )}
        </div>

        {containsProjects && (
        <ModalToView
          tag={projectByIndex.tag}
          title={projectByIndex.title}
          link={projectByIndex.url}
          description={projectByIndex.description}
          urlImg={projectByIndex.imgFile}
          createdAt={projectByIndex.createdAt}
        />
      )}
      
      </section>
    </section>
  );
};

export default Discovery;
