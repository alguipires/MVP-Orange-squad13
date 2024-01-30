import React, { useEffect, useState } from "react";
import './ProfileHome.css'
import Button from '../Button/Button'
import {getSavedUser} from '../../utils/sessionStorageLogin'
import Modal from '../Modal/Modal'
import { FormToAddProject } from '../Modal/Modal'
//import useStore from "../../zustand/store";


export default function ProfileHome () {
  const handleClick = () => {
    // Chama a função FormToAddProject
    FormToAddProject();
    console.log("erro")
  };

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
            console.error("erro ao obeter pais",error)
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
            <Button 
              className="buttonProfileHome"
              onClick={handleClick}
              value="Adicionar projeto"  
            />
          </div>
        </div>
      </div>
    );
  }