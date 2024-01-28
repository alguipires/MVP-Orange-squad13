import React from "react";
import AvatarIcon from "../AvatarIcon";
import Button from '@mui/material/Button';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import './ProfileHome.css'
import Avatar from '../AvatarIcon/index'
//import Button from '../Button/Button'

export default function ProfileHome () {
    return (
      <div className="container">
        <div className="content">
          <img className="imgProfileHome" src="https://avatars.githubusercontent.com/u/91149014?v=4" alt="Descrição da imagem" />
          <div className="text-container">
            <h2>Débora Lídia</h2>
            <br></br>
            <p>Brasil</p>
            <br></br>
            <button className="buttonProfileHome">Adicionar projeto</button>
          </div>
        </div>
      </div>
    );
  }