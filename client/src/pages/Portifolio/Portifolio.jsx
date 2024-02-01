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



function Portifolio(){
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const loadingProjects = async () => {
    const tokenGoogle = getSavedUser('@AuthFirebase:token');
    const tokenBackend = getSavedUser('@AuthBackend:token');
    const user = getSavedUser('@AuthFirebase:user');

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

  console.log(projects);

    return(
        <section className="portifolio_container">
            <div className="container_appBar">
              <AppBar/>
            </div>
            <div className="profile">
              <Profile/>
            </div>
            <div className="container_text_my_projects">
              Meus Projetos
            </div>
            <div className="container_input_search">
              <TextField/>
            </div>
            <div className="container_basic_card">
              {projects.map(({id, url, tag, createdAt }) => (
                <BasicCard key={id} url={url} tag={tag} createdAt={createdAt} />
              ))  
              }
            </div>
            <div>
              <Modal/>
            </div>
        </section>
        
    )
}
export default Portifolio