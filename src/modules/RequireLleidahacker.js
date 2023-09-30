import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { me } from "src/services/AuthenticationService";

export default function RequireLleidahacker({ children, originalRoute }) {
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
      await me().then((key) => {
        setAuth(key["type"] == "lleida_hacker");
      });
      setLoading(false);
    })();
  }, []);

  return loading ? (
    <span>Loading...</span>
  ) : auth ? (
    children
  ) : (
    navigate("/login", { state: { nextScreen: originalRoute + hacker_id } })
  );
}
