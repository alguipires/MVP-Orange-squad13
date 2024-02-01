import React, { useEffect, useState } from "react";
import AppBar from '../../components/AppBar/AppBar';
import "./Portifolio.css";
// import AvatarIcon from '../AvatarIcon/index';
import TextField from "../../components/TextFild/TextFild";
import BasicCard from '../../components/BasicCard2/BasicCard2';
import Profile from '../../components/ProfileHome/ProfileHome';
import Modal from '../../components/Modal/Modal'
import { getSavedUser } from "../../utils/sessionStorageLogin";
import { projectWhitGoogle, projectsWithUser } from "../../api/axiosInstance";
import ModalToView from "../../components/Modal/ModalToView";



function Portifolio(){
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const loadingProjects = async () => {
    const tokenGoogle = await getSavedUser('@AuthFirebase:token');
    const tokenBackend = await getSavedUser('@AuthBackend:token');
    const user = await getSavedUser('@AuthFirebase:user');

    if (Object.keys(tokenGoogle).length !== 0 && Object.keys(user).length !== 0) {
      const projectsLoginGoogle = await projectWhitGoogle(tokenGoogle, user.uid)
      setProjects(projectsLoginGoogle)
    }

    if (Object.keys(tokenBackend).length !== 0) {
      const projectsLoginBackend = await projectsWithUser(tokenBackend)
      setProjects(projectsLoginBackend)
    }
    }
  loadingProjects()
  }
  , []);

  const containsProjects = projects.length > 0;

    return(
        <section className="portifolio_container">
            <div className="container_appBar">
              <AppBar/>
            </div>
            <div className="profile">
              <Profile/>
            </div>
            <section className="container_my_project">

              <div className="container_text_my_projects">
                Meus Projetos
              </div>

              <div className="container_input_search">
                <TextField/>
              </div>

              <div className="container_basic_card">
                {containsProjects ? 
                  projects.map(({id, url, tag, createdAt }) => {
                    console.log('entrei aqui :', id);
                    return (
                      <BasicCard key={id} projectId={id} url={url} tag={tag} createdAt={createdAt}/>
                    )
                  })
                :
                <BasicCard/>
              }
              </div>

            </section>
            
            {containsProjects ?
              <ModalToView/>
              :
              <div>
                <Modal/>
              </div>
            }

        </section>
        
    )
}
export default Portifolio