import React, { useEffect, useState } from 'react';
import './ProfileHome.css';
import BotaoSalvarModal from '../BotaoAdicionarModal/BotaoAdicionarModal';
import * as avatars from '../../assets/icons/avatar';
import NestedModal from '../Modal/ModalAddProject';
import useStore from '../../zustand/store';

export function getRandomAvatar() {
  const avatarsList = Object.keys(avatars);
  const avatarsQnt = avatarsList.length;
  const avatarIndex = Math.floor(Math.random() * avatarsQnt);
  const avatar = avatars[avatarsList[avatarIndex]];
  return avatar;
}

export default function ProfileHome() {
  const [ currentUser ] = useStore((state) => [state.currentUser]);
  const [userCountry, setUserCoutry] = useState('');

  useEffect(() => {

      fetch('https://ipapi.co/json/')
        .then((response) => response.json())
        .then((date) => {
          setUserCoutry(date.country_name);
        })
        .catch((error) => {
          console.error('erro ao obter pais', error);
        });

  }, []);
  
  return (
    <div className="container">
      <div className="content">
        <img
          className="imgProfileHome"
          src={ currentUser.avatar ? currentUser.avatar : currentUser.photoURL }
          alt="Imagem de perfil do usuário"
        />
        <div className="text-container">
          <h2>{currentUser.firstName ? `${currentUser.firstName} ${currentUser.lastName}` : currentUser.displayName}</h2>
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
