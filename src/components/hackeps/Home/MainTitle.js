import "src/components/hackeps/Home/MainTitle.css";
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import Button from "src/components/buttons/Button";
import hackLogo from "src/icons/banner_home_icon.png";
import { useNavigate } from "react-router-dom";
import { checkToken } from "src/services/AuthenticationService";

const MainTitle = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [hackDay, setHackDay] = useState(false);
  const handleClose = () => setShow(false);
  const [textButton, setTextButton] = useState("Apunta't!");
  async function handleShow() {
    if (localStorage.getItem("userToken") === null) {
      setShow(true);
    } else if (
      await checkToken().then((key) => {
        return !key["success"];
      })
    ) {
      if (!hackDay) {
        navigate("/login", { state: { nextScreen: "/inscripcio" } });
      } else {
        navigate("/hacking");
      }
    } else {
      if (!hackDay) {
        navigate("/inscripcio");
      } else {
        navigate("/hacking");
      }
    }
  }

  const handleSignUp = () => navigate("/hacker-form");
  const handleSignIn = () => {
    navigate("/login", { state: { nextScreen: "/inscripcio" } });
  };

  useEffect(() => {
    const today = new Date();
    const eventDays = [
      // Aqui es fiquen les dates dels dies de la Hack.
      new Date("2024-11-23"),
      new Date("2024-11-24"),
    ];

    if (
      eventDays.some(
        (eventDay) =>
          today.getFullYear() === eventDay.getFullYear() &&
          today.getMonth() === eventDay.getMonth() &&
          today.getDate() === eventDay.getDate(),
      )
    ) {
      setTextButton("Hacking..");
      setHackDay(true);
    }
  }, []);

  return (
    <>
      <div className="backgrounder bg-primaryHackeps bg-center">
        <div className="fantasma" id="home"></div>
        <div className="col-12">
          <div className="rowe">
            <img className="imagelogo" src={hackLogo} alt="" />
          </div>
        </div>
        <div className="join-button">
          <Button onClick={handleShow} secondary outline>
            {textButton}
          </Button>
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
