import React from "react";
import { useContext } from "react";
import { AuthGoogleContext } from "../contexts/authGoogle";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const { signed } = useContext(AuthGoogleContext);
  console.log(signed);
  // eslint-disable-next-line no-constant-condition
  return true ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;