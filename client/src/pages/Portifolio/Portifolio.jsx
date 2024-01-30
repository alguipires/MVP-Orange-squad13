import React from 'react';
import AppBar from '../../components/AppBar/AppBar';
import './Portifolio.css';
// import AvatarIcon from '../AvatarIcon/index';
import TextField from '../../components/TextFild/TextFild';
import BasicCard2 from '../../components/BasicCard2/BasicCard2';
import Profile from '../../components/ProfileHome/ProfileHome';
import Modal from '../../components/Modal/Modal';

function Portifolio() {
  return (
    <section className="styles.portifolio_container">
      <div>
        <AppBar />
      </div>
      <div className="profile">
        <Profile />
      </div>
      <div className="meusProjetos">Meus Projetos</div>
      <div className="buscarTags">
        <TextField />
      </div>
      <div>
        <BasicCard2 />
      </div>
      <div>
        <Modal />
      </div>
    </section>
  );
}
export default Portifolio;
