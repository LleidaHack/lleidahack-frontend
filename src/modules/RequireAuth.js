import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { checkToken } from "src/services/AuthenticationService";

export default function RequireAuth({ children, originalRoute }) {
  let { hacker_id } = useParams();
  if (hacker_id === undefined) {
    hacker_id = "";
  } else {
    hacker_id = "/" + hacker_id;
  }
  const navigate = useNavigate();
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await checkToken().then((key) => {
        setAuth(key["success"]);
      });
      setLoading(false);
    })();
  }, []);

  return loading ? ( // The code that did the magic
    <span>Loading...</span>
  ) : auth ? (
    children
  ) : (
    navigate("/login", { state: { nextScreen: originalRoute + hacker_id } })
  );
}
