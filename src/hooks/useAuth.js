import { useState } from "react";

const useAuth = () => {
  const [user, setUser] = useState(null);

  const login = (username) => {
    setUser(username);
    console.log(`Usuario autenticado: ${username}`);
  };

  const logout = () => {
    setUser(null);
    console.log("Usuario cerrado sesión");
  };

  return { user, login, logout };
};

export default useAuth;
