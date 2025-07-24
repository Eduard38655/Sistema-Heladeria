import { useContext } from "react";
import { Information } from "../src/Context/StoreContext.jsx";
// src/components/ProtectedRoute.jsx
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
 
const { LogOut,SetLogout}=useContext(Information)


  // Si no hay usuario, redirige a /login
  if (!LogOut) {
     SetLogout(false)
    return <Navigate to="/" replace />;
  }
 

  // Si está autenticado, renderiza las rutas hijas
  return <Outlet />;
}
