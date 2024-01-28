import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Register from "../pages/Register/Register";
import PrivateRoutes from '.';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" exact element={<Login />} />

        <Route path="/register" exact element={<Register />} />

        <Route path='portifolio' element={<PrivateRoutes />} >
          <Route path='portifolio' element={<h1>Portifolio</h1>} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
