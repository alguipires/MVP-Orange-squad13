import React, { useEffect } from 'react';
import AppBar from '../../components/AppBar/AppBar';
import './Portifolio.css';
// import AvatarIcon from '../AvatarIcon/index';

import BasicCard from '../../components/BasicCard/BasicCard';
import TextField from '../../components/TextFild/TextFild';
import Profile from '../../components/ProfileHome/ProfileHome';
import Modal from '../../components/Modal/ModalAddProject';
import { getSavedUser } from '../../utils/sessionStorageLogin';
import { projectWhitGoogle, projectsWithUser } from '../../api/axiosInstance';
import ModalToView from '../../components/Modal/ModalToView';
import ModalExcluir from '../../components/Modal/ModalExcluir';
import ModalEditProject from '../../components/Modal/ModalEditProject';
import ModalDeletado from '../../components/Modal/ModalDeletado';
import useStore from '../../zustand/store';

function Portifolio() {
  const [
    indexProject,
    currentProjects,
    updateCurrentProjects,
    openDeleteProjectModal,
    openEditProjectModal,
    openDeleteSuccessModal,
    inputSearch,
  ] = useStore((state) => [
    state.indexProject,
    state.currentProjects,
    state.updateCurrentProjects,
    state.openDeleteProjectModal,
    state.openEditProjectModal,
    state.openDeleteSuccessModal,
    state.inputSearch,
  ]);

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
        updateCurrentProjects(projectsLoginGoogle);
        return;
      }

      if (Object.keys(tokenBackend).length !== 0) {
        const projectsLoginBackend = await projectsWithUser(tokenBackend);
        updateCurrentProjects(projectsLoginBackend);
        return;
      }
    };
    loadingProjects();
  }, []);

  const containsProjects = currentProjects?.length > 0;
  const projectByIndex = containsProjects && currentProjects[indexProject];

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
            currentProjects
              ?.filter((project) =>
                project.tag.toLowerCase().includes(inputSearch.toLowerCase())
              )
              .map(({ id, url, imgFile, tag, createdAt }, index) => {
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
          tag={projectByIndex?.tag}
          title={projectByIndex?.title}
          link={projectByIndex?.url}
          description={projectByIndex?.description}
          urlImg={projectByIndex?.imgFile}
          createdAt={projectByIndex?.createdAt}
        />
      ) : (
        <div>
          <Modal />
        </div>
      )}
      {openDeleteProjectModal && <ModalExcluir />}
      {openEditProjectModal && <ModalEditProject />}
      {openDeleteSuccessModal && <ModalDeletado />}
    </section>
  );
}
export default Portifolio;
