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
    <div className="bg-white md:pb-24 flex flex-col">

      <div className="separador mt-0 h-0 lg:h-36 lg:h-44 md:h-56 wavesea">
        <img src={Seapointed} alt="Seapointed" className=" h-auto " />
      </div>
      <div className=" p-5 pt-0 z-20 relative flex flex-col md:flex-col  items-center  ">
        <div className="sirenaPiedra hidden lg:flex h-0lg:h-20 md:h-16 w-full flex-col items-end mb-5 tramsform -translate-y-72 ">
          <div className="piedra flex justify-end transform translate-x-24 -translate-y-[17rem]">
            <img
              src={sirenapiedra}
              alt="piedra"
              className="w-6/12 h-auto z-0"
            />
          </div>
          <div className="calendario z-10 -translate-y-[40rem] ">
            <Calendar />
          </div>
        </div>

        <div className="mt-32 lg:mt-0">
          <TitleGeneralized
            padTop="0"
            underline
            alignText="left"
            textNone
            className="text-primaryHackeps font-semibold pl-2"
          >
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
                  La novena edició de la HackEPS tindrà lloc a l'edifici de
                  l'Escola Politècnica Superior de la Universitat de Lleida els
                  dies 23 i 24 de novembre de 2024. Aquest és un esdeveniment
                  que no voldràs perdre't!
                </p>
                <p className="text-justify mr-5">
                  Així que, si ets un apassionat de la tecnologia, amant dels
                  reptes i defensor del treball en equip, la HackEPS 2024 és el
                  teu lloc. Uneix-te a nosaltres per a una experiència
                  inoblidable per a desenvolupar-te com a futur programador!
                </p>
              </Col>
              <Col></Col>
            </Row>
            <Row className="flex justify-center lg:hidden mt-10">
              <div className="calendario z-10 flex justify-center lg:hidden">
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
