import "src/components/hackeps/Home/Calendar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TitleGeneralized from "../TitleGeneralized/TitleGeneralized";
import Calendar from "src/components/hackeps/Calendar/Calendar";
import Seapointed from "src/assets/img/seapointed.png";
import sirenapiedra from "src/assets/img/sirenapedruzco.png";

const CalendarDates = (props) => {
  return (
    <div className="bg-white pb-32">
      <div className="absolute w-full h-auto overflow-hidden top-[20%] ">
        <img src={Seapointed} alt="Seapointed" className="w-full h-auto " />
      </div>

      <div className=" p-5 z-20 relative flex flex-row justify-between items-center mt-56 ">
        
        <div>
          <TitleGeneralized padTop="0" underline alignText="left" textNone className="text-primaryHackeps font-semibold pl-2">
            Dates
          </TitleGeneralized>
          <Container>
            <Row className="flex flex-col gap-4 md:flex-row md:gap-0">
              <Col className="calendar-content">
                <p className="text-justify mr-5">
                  Lleidahack et dona la benvinguda a la HackEPS 2024, la primera
                  hackató de les terres de Lleida!
                </p>
                <p className="text-justify mr-5">
                  La vuitena edició de la HackEPS tindrà lloc a l'edifici de
                  l'Escola Politècnica Superior de la Universitat de Lleida els dies
                  23 i 24 de novembre de 2024. Aquest és un esdeveniment que no
                  voldràs perdre't!
                </p>
                <p className="text-justify mr-5">
                  Així que, si ets un apassionat de la tecnologia, amant dels reptes
                  i defensor del treball en equip, la HackEPS 2024 és el teu lloc.
                  Uneix-te a nosaltres per a una experiència inoblidable per a
                  desenvolupar-te com a futur programador!
                </p>
              </Col>
              <Col>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="sirenaPiedra">
          <div className="piedra">
            <img src={sirenapiedra} alt="piedra" className="absolute w-6/12 h-auto left-[50%] bottom-[-15%] z-0" />
          </div>
          <div className="calendario absolute z-10 left-[30%] top-[0%] w-full ">
             <Calendar />
          </div>

        </div>
      </div>
    </div>
  );
};

export default CalendarDates;
