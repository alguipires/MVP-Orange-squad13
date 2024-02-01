import React, { useEffect, useState } from "react";
import './ProfileHome.css'
import {getSavedUser} from '../../utils/sessionStorageLogin'
import BotaoSalvarModal from "../BotaoSalvarModal/BotaoSalvarModal";
//import { Button } from "@mui/material";
//import Button from "../Button/Button";
//import NestedModal from '../Modal/Modal'
//import { FormToAddProject } from '../Modal/Modal'
//import useStore from "../../zustand/store";


export default function ProfileHome () {

    const [ user, setUser] = useState({});
    const [ userCountry , setUserCoutry] = useState('');

    useEffect(() => {
      const userSession = getSavedUser("@AuthFirebase:user")

      if (userSession) {
        setUser(userSession);

        fetch('https://ipapi.co/json/')
          .then(response => response.json())
          .then(date=>{
            setUserCoutry(date.country_name);
          })
          .catch(error =>{
            console.error("erro ao obter pais",error)
          })
      }
    }, []);

    return (
      <div className="container">
        <div className="content">
          <img className="imgProfileHome" src= {user.photoURL} alt="Descrição da imagem" />
          <div className="text-container">
            <h2>{user.displayName}</h2>
            <br></br>
            <p>{userCountry}</p>
            <br></br>
            <BotaoSalvarModal/>
            
          </div>
        </div>
      </div>
    );
  }