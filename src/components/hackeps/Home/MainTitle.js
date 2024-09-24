import "src/components/hackeps/Home/MainTitle.css";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Button from "src/components/buttons/Button";
import hackLogo from "src/icons/banner_home_icon.png";
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
      navigate("/login", { state: { nextScreen: "/inscripcio" } });
    } else {
      navigate("/inscripcio");
    }
  }

  const handleSignUp = () => navigate("/hacker-form");
  const handleSignIn = () => {
    navigate("/login", { state: { nextScreen: "/inscripcio" } });
  };

  return (
    <>
      <div className="backgrounder bg-primaryHackeps bg-center">
        <div className="fantasma" id="home"></div>
        {/* <div className="magic_div"> */}
        <div className="col-12">
          <div className="rowe">
            <img className="imagelogo" src={hackLogo} alt="" />
          </div>
        </div>
        <div className="join-button">
          <Button onClick={handleShow} secondary outline>
            Apunta't!
          </Button>
        </div>
        {/* </div> */}
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton className="no-border">
          <Modal.Title>Inici de sessió</Modal.Title>
        </Modal.Header>
        <Modal.Body className="no-border">
          Has d'iniciar sessió per apuntar-te!
        </Modal.Body>
        <Modal.Footer className="no-border justify-content-center">
          <Button primary onClick={handleSignIn}>
            Tinc compte
          </Button>
          <Button primary onClick={handleSignUp}>
            Crear compte
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MainTitle;
