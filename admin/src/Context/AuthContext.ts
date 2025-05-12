import { createContext } from "react";

export interface AuthContextType{
    user: any;
    setUser:(value:boolean)=>void
    isAuthenicated: boolean,
    setIsAuthenicated: (value: boolean) => void;
    isLoading: boolean;
    setIsLoading:(value: boolean)=> void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export default AuthContext;