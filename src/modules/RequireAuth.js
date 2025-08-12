import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { checkToken } from "src/services/AuthenticationService";
import Header from "src/components/hackeps/Header/Header";
import Footer from "src/components/hackeps/Footer/Footer";
import LoadSection from "src/components/hackeps/LoadSection/Loadsection";

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
      setLoading(true);
    })();
  }, []);

  return loading ? ( // The code that did the magic
    <>
      <Header />
      <LoadSection />
      <Footer />
    </>
  ) : auth ? (
    children
  ) : (
    navigate("/login", { state: { nextScreen: originalRoute + hacker_id } })
  );
}
