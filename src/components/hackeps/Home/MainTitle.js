import "src/components/hackeps/Home/MainTitle.css";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Button from "src/components/buttons/Button";
import hackLogo from "src/icons/hackLogo.png";
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
      <div className="backgrounder bg-primaryHackeps bg-cover h-[50vh] overflow-hidden">
        <div className="fantasma relative" id="home"></div>
        <div className="magic_div pt-5[vh] w-full overflow-hidden max-h-[50vh]">
          <div className="col-12">
            <div className="rowe flex justify-center mb-[1vw] h-[25vh] my-8">
              <img className="imagelogo justify-center text-center" src={hackLogo} alt="" />
            </div>
            <div className="text-center">
              <Button onClick={handleShow} xl light>
                Apunta't!
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton className="border-0">
          <Modal.Title>Inici de sessió</Modal.Title>
        </Modal.Header>
        <Modal.Body className="border-0">
          Has d'iniciar sessió per apuntar-te!
        </Modal.Body>
        <Modal.Footer className="border-0 justify-content-center">
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
