import { useEffect } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { checkToken } from "src/services/AuthenticationService";

export default function RequireAuth({children}) {
    const [auth, setAuth] = useState(false);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        (async () => {
          await checkToken().then((key) => {
            setAuth(key["success"]);

          })
        
        setLoading(false)
        console.log(auth)
        })()
    },[])
    
    return loading ?  // The code that did the magic
        <span>Loading...</span> : (auth?
            children : <Navigate to={"/login"}/>) 
}