import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setISAuth] = useState(false);

  const login = () => {
    setISAuth(true);
  };
  const logout = () => {
    setISAuth(false);
  };
  return <AuthContext.Provider value={{isAuth, login, logout}}>{children}</AuthContext.Provider>;
};