import React, { useEffect, useState } from 'react';
import './ProfileHome.css';
import BotaoSalvarModal from '../BotaoAdicionarModal/BotaoAdicionarModal';
import { getSavedUser } from '../../utils/sessionStorageLogin';
import * as avatars from '../../assets/icons/avatar';
//import { FormToAddProject } from '../Modal/Modal'
//import useStore from "../../zustand/store";

export default function ProfileHome() {
  const [user, setUser] = useState({});
  const [userCountry, setUserCoutry] = useState('');

  useEffect(() => {
    const userSession = getSavedUser('@AuthFirebase:user');

    if (userSession) {
      setUser(userSession);

      fetch('https://ipapi.co/json/')
        .then((response) => response.json())
        .then((date) => {
          setUserCoutry(date.country_name);
        })
        .catch((error) => {
          console.error('erro ao obter pais', error);
        });
    }
  }, []);

  function getRandomAvatar() {
    const avatarsList = Object.keys(avatars);
    const avatarsQnt = avatarsList.length;
    const avatarIndex = Math.floor(Math.random() * avatarsQnt);
    const avatar = avatars[avatarsList[avatarIndex]];
    return avatar;
  }

  return (
    <div className="container">
      <div className="content">
        <img
          className="imgProfileHome"
          src={user.photoURL || getRandomAvatar()}
          alt="Imagem de perfil do usuário"
        />
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
