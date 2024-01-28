import React from "react";
import AppBar from '../AppBar/AppBar';
import "./Portifolio.css";
import AvatarIcon from '../AvatarIcon/index';
import TextField from "../TextFild/TextFild";
import BasicCard from '../BasicCard2/BasicCard2';
import Profile from '../ProfileHome/ProfileHome';
import Modal from '../Modal/Modal'



function Portifolio(){
    return(
        <section className="styles.portifolio_container">
           <div>
           <AppBar/>
           </div>
           <div class="profile">
                <Profile/>
           </div>
           <div class="meusProjetos">
            Meus Projetos
           </div>
           <div class="buscarTags">
            <TextField/>
           </div>
           <div>
           <BasicCard/>
           </div>
           <div>
            <Modal/>
           </div>
           
           
        </section>
        
    )
}
export default Portifolio