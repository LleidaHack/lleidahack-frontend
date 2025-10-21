import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import Button from "src/components/buttons/Button";
import hackLogo from "src/icons/banner_home_icon.png";
import { useNavigate } from "react-router-dom";
import { checkToken } from "src/services/AuthenticationService";

const MainTitle = ({ buttonText = "Apunta't!", refresh = false }) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [hackDay, setHackDay] = useState(false);
  const handleClose = () => setShow(false);

  async function handleShow() {
    if (refresh) {
      window.location.reload();
      return;
    }
    if (localStorage.getItem("registeredOnEvent") === "true") {
      navigate("/perfil");
      return;
    }

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
  const [textButton, setTextButton] = useState(buttonText);

  useEffect(() => {
    setTextButton(buttonText);
  }, [buttonText]);

  const handleSignUp = () => navigate("/hacker-form");
  const handleSignIn = () => {
    navigate("/login", { state: { nextScreen: "/inscripcio" } });
  };

  useEffect(() => {
    const today = new Date();
    const eventDays = [
      // Aqui es fiquen les dates dels dies de la Hack.
      new Date("2025-11-22"),
      new Date("2025-11-23"),
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
      <div className="justify-center items-center flex flex-col gap-5 mt-2 w-full z-50">
        <div className="col-12 w-full flex justify-center">
          <img
            src={hackLogo}
            alt="Hack Logo"
            className="w-[70%] max-w-[200px] md:max-w-[250px] lg:max-w-[300px] mx-auto"
          />
        </div>
        <div className="join-button relative z-50" style={{ zIndex: 5000 }}>
          <Button
            onClick={handleShow}
            className={
              "bg-red-500 text-white hover:bg-primaryHackeps duration-1 relative z-50"
            }
            outline
          >
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
