import { useContext } from "react";
import { AuthGoogleContext } from "../contexts/authGoogle";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const { signed } = useContext(AuthGoogleContext);
  
  console.log(signed);

  return signed ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;