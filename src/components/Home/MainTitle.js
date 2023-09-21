import "src/components/Home/MainTitle.css";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import hackLogo from "src/icons/hackLogo_black_cover.png";

import { useNavigate } from "react-router-dom";
import { checkToken } from "src/services/AuthenticationService";

const MainTitle = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  async function handleShow() {
    if (localStorage.getItem("userToken") === null) {
      setShow(true);
    } else if (
      await checkToken().then((key) => {
        return !key["success"];
      })
    ) {
      localStorage.setItem("nextScreen", "/inscripcio");
      navigate("/login"); 
    } else {
      navigate("/inscripcio");
    }
  }

  const handleSignUp = () => navigate("/hacker-form");
  const handleSignIn = () => {
    localStorage.setItem("nextScreen", "/inscripcio");
    navigate("/login");
  };

  return (
    <>
      <div className="backgrounder">
        <div className="fantasma" id="home"></div>
        <div className="magic_div">
          <div className="col-12">
            <div className="rowe">
              <img className="imagelogo" src={hackLogo} alt="" />
            </div>
            <div className="row text-center">
              <a
                href="#"
                style={{ width: "fit-content", textDecoration: "none" }}
                className="py-2 px-4 m-auto apuntat-button"
                onClick={handleShow}
              >
                Apunta't!
              </a>
            </div>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton className="no-border">
          <Modal.Title>Inici de sessió</Modal.Title>
        </Modal.Header>
        <Modal.Body className="no-border">
          Has d'iniciar sessió per apuntar-te!
        </Modal.Body>
        <Modal.Footer className="no-border justify-content-center">
          <Button className="main-title-modal-button" onClick={handleSignIn}>
            Tinc compte
          </Button>
          <Button className="main-title-modal-button" onClick={handleSignUp}>
            Crear compte
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MainTitle;
