import "src/components/hackeps/Home/Calendar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TitleGeneralized from "../TitleGeneralized/TitleGeneralized";
import Calendar from "src/components/hackeps/Calendar/Calendar";
import Seapointed from "src/assets/img/seapointed.png";
import sirenapiedra from "src/assets/img/sirenapedruzco.png";
import "./Olas.css";

const CalendarDates = (props) => {
  return (
    <div className="bg-white md:pb-24 flex flex-col relative z-0" id="dates">
      {/* Piedra en esquina superior derecha */}
      <div className="absolute bottom-96 right-0 w-[200px] md:w-[400px] lg:w-[550px] z-40 hidden lg:block">
        <div className="relative">
          <img src={sirenapiedra} alt="piedra" className="w-full h-auto" />

          {/* Calendario superpuesto */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[60%] max-w-[300px] md:max-w-[400px] lg:max-w-[400px] transform translate-x-20 scale-75">
              <Calendar />
            </div>
          </div>
        </div>
      </div>

      <div className="separador mt-0 h-0 lg:h-36 lg:h-44 md:h-56 wavesea">
        <img src={Seapointed} alt="Seapointed" className="h-auto" />
      </div>

      <div className="px-6 md:px-16 pt-0 z-10 relative flex flex-col md:flex-col items-center">
        <div className="mt-32 my-20 w-full">
          <TitleGeneralized
            padTop="0"
            underline
            alignText="left"
            textNone
            className="text-primaryHackeps font-semibold"
          >
            Dates
          </TitleGeneralized>

          <Container fluid className="px-0">
            <Row className="flex flex-col gap-4 lg:flex-row md:gap-0">
              <Col className="calendar-content">
                <p className="text-justify mr-5">
                  Lleidahack et dona la benvinguda a la HackEPS 2025, la primera
                  hackató de les terres de Lleida!
                </p>
                <p className="text-justify mr-5">
                  La novena edició de la HackEPS tindrà lloc a l'edifici de
                  l'Escola Politècnica Superior de la Universitat de Lleida els
                  dies 22 i 23 de novembre de 2025. Aquest és un esdeveniment
                  que no voldràs perdre't!
                </p>
                <p className="text-justify mr-5">
                  Així que, si ets un apassionat de la tecnologia, amant dels
                  reptes i defensor del treball en equip, la HackEPS 2025 és el
                  teu lloc. Uneix-te a nosaltres per a una experiència
                  inoblidable per a desenvolupar-te com a futur programador!
                </p>
              </Col>
              <Col></Col>
            </Row>

            <Row className="flex justify-center lg:hidden mt-10">
              <div className="z-10 flex justify-center lg:hidden">
                <Calendar />
              </div>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default CalendarDates;