import { useState, type ReactNode } from "react";
import AuthContext from "./AuthContext";

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenicated, setIsAuthenicated] = useState<boolean>(false);
  const [user, setUser] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <AuthContext.Provider
      value={{
        isAuthenicated,
        setIsAuthenicated,
        user,
        setUser,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
