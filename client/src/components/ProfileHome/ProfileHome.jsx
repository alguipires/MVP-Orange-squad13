import React, { useEffect, useState } from 'react';
import './ProfileHome.css';
import BotaoSalvarModal from '../BotaoAdicionarModal/BotaoAdicionarModal';
import { getSavedUser } from '../../utils/sessionStorageLogin';
import * as avatars from '../../assets/icons/avatar';
import NestedModal from '../Modal/ModalAddProject';
//import { FormToAddProject } from '../Modal/Modal'
//import useStore from "../../zustand/store";

export function getRandomAvatar() {
  const avatarsList = Object.keys(avatars);
  const avatarsQnt = avatarsList.length;
  const avatarIndex = Math.floor(Math.random() * avatarsQnt);
  const avatar = avatars[avatarsList[avatarIndex]];
  return avatar;
}

export default function ProfileHome() {
  const [user, setUser] = useState({});
  const [userCountry, setUserCoutry] = useState('');
  const [randomAvatar, setRandomAvatar] = useState('');

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

    setRandomAvatar(getRandomAvatar());
  }, []);

  

  return (
    <div className="container">
      <div className="content">
        <img
          className="imgProfileHome"
          src={user.photoURL || randomAvatar}
          alt="Imagem de perfil do usuário"
        />
        <div className="text-container">
          <h2>{user.displayName}</h2>
          <br></br>
          <p>{userCountry}</p>
          <br></br>
          <BotaoSalvarModal/>
          <NestedModal />
        </div>
      </div>
    </div>
  );
}
