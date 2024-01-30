import React from 'react';
import './ProfileHome.css';
import Button from '../Button/Button';
// import useStore from "../../zustand/store";

export default function ProfileHome() {
  // const [ openModal, updateOpenModal ] = useStore((state) =>
  // [ state.openModal, state.updateOpenModal ]
  // );

  return (
    <div className="container">
      <div className="content">
        <img
          className="imgProfileHome"
          src="https://avatars.githubusercontent.com/u/91149014?v=4"
          alt="Descrição da imagem"
        />
        <div className="text-container">
          <h2>Débora Lídia</h2>
          <br></br>
          <p>Brasil</p>
          <br></br>
          <Button
            className="buttonProfileHome"
            // onClick={updateOpenModal(!openModal)}
            value="Adicionar projeto"
          />
        </div>
      </div>
    </div>
  );
}
