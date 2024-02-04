import React, { useEffect, useState } from 'react';
import AppBar from '../../components/AppBar/AppBar';
import './Portifolio.css';
// import AvatarIcon from '../AvatarIcon/index';

import BasicCard from '../../components/BasicCard/BasicCard';
import TextField from '../../components/TextFild/TextFild';
//import BasicCard from '../../components/BasicCard2/BasicCard2';

import Profile from '../../components/ProfileHome/ProfileHome';
import Modal from '../../components/Modal/Modal';
import { getSavedUser } from '../../utils/sessionStorageLogin';
import { projectWhitGoogle, projectsWithUser } from '../../api/axiosInstance';
import ModalToView from '../../components/Modal/ModalToView';
import useStore from '../../zustand/store';

function Portifolio() {
  const [projects, setProjects] = useState([]);
  const [indexProject] = useStore((state) => [state.indexProject]);

  useEffect(() => {
    const loadingProjects = async () => {
      const tokenGoogle = await getSavedUser('@AuthFirebase:token');
      const tokenBackend = await getSavedUser('@AuthBackend:token');
      const user = await getSavedUser('@AuthFirebase:user');

      if (
        Object.keys(tokenGoogle).length !== 0 &&
        Object.keys(user).length !== 0
      ) {
        const projectsLoginGoogle = await projectWhitGoogle(
          tokenGoogle,
          user.uid
        );
        setProjects(projectsLoginGoogle);
      }

      if (Object.keys(tokenBackend).length !== 0) {
        const projectsLoginBackend = await projectsWithUser(tokenBackend);
        setProjects(projectsLoginBackend);
      }
    };
    loadingProjects();
  }, []);

  const containsProjects = projects.length > 0;
  const projectByIndex = projects && projects[indexProject];

  return (
    <section className="portifolio_container">
      
      <AppBar />
      <div className="container_profile">
        <Profile />
      </div>
      <section className="container_my_project">
        <h2 className="container_text_my_projects">Meus Projetos</h2>

        <div className="container_input_search">
          <TextField />
        </div>

        <div className="container_basic_card">
          {containsProjects ? (
            projects.map(({ id, url, imgFile, tag, createdAt }, index) => {
              return (
                <BasicCard
                  key={id}
                  projectId={id}
                  index={index}
                  link={url}
                  urlImg={imgFile}
                  tag={tag}
                  createdAt={createdAt}
                />
              );
            })
          ) : (
            <BasicCard />
          )}
        </div>
      </section>

      {containsProjects ? (
        <ModalToView
          tag={projectByIndex.tag}
          title={projectByIndex.title}
          link={projectByIndex.url}
          description={projectByIndex.description}
          urlImg={projectByIndex.imgFile}
          createdAt={projectByIndex.createdAt}
        />
      ) : (
        <div>
          <Modal />
        </div>
      )}
    </section>
  );
}
export default Portifolio;
