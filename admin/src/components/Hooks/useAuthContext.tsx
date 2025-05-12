import { useContext } from "react"
import AuthContext from "../../Context/AuthContext"


const useAuthContext = ()=>{
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error("useAuthcontext must be used inside Provider");
    }
    return context;
}


export default useAuthContext;