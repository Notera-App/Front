import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

//Se crea el redireccionamiento para cerrar sesion de tu cuenta en la aplicacion, el redireccionamiento se hace a la ruta origen que este definida.
export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ returnTo: window.location.origin })}>
      Logout
    </button>
  );
};
