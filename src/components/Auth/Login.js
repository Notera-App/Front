import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

//Se crea una funcion flecha para redireccionar nuestra aplicacion a una nueva ventana de autentificacion de usuario.
export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="login-button" onClick={() => loginWithRedirect()}>Login</button>;
};
