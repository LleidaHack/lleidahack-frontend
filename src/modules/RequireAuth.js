import { useState } from "react";
import { Navigate } from "react-router-dom";
import { checkToken } from "src/services/AuthenticationService";

export default function RequireAuth({children}) {
    const [auth, setAuth] = useState(false);
    
    checkToken().then((key) => {
        setAuth(!key["success"]);
      })
    
    return auth? children : <Navigate to={"../login"}/>;
}