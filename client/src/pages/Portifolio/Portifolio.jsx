import React from "react";
import AppBar from '../../components/AppBar/AppBar';
import "./Portifolio.css";
// import AvatarIcon from '../AvatarIcon/index';
import TextField from "../../components/TextFild/TextFild";
import BasicCard2 from '../../components/BasicCard2/BasicCard2';
import Profile from '../../components/ProfileHome/ProfileHome';
import Modal from '../../components/Modal/Modal'



function Portifolio(){
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
              <BasicCard2/>
            </div>
            <div>
              <Modal/>
            </div>
        </section>
        
    )
}
export default Portifolio