import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import auth from "../firebase";

interface AuthContextType {
  loggedIn: boolean;
  logout: () => void;
}

interface Props {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType>({
  loggedIn: true,
  logout: () => {},
});

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
  }, []);

  const logout = () => auth.signOut();

  const contextValue = {
    loggedIn,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
