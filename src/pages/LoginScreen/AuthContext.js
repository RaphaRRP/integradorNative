import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [codigoLogado, setCodigoLogado] = useState(null);

  const setCodigoLogadoGlobal = (codigo) => {
    setCodigoLogado(codigo);
  };

  return (
    <AuthContext.Provider value={{ codigoLogado, setCodigoLogado: setCodigoLogadoGlobal }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
