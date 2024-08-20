import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "src/components/hackeps/Home/Calendar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TitleGeneralized from "../TitleGeneralized/TitleGeneralized";

const CalendarDates = (props) => {
  const [startDate, setStartDate] = useState(props.startDate);
  const [endDate, setEndDate] = useState(props.endDate);

  useEffect(() => {
    setStartDate(props.startDate);
    setEndDate(props.endDate);
  }, [props.startDate, props.endDate]);

  return (
    <div className="bg-secondaryHackeps p-5">
      <div className="claseGhosting" id="dates"></div>
      <TitleGeneralized padTop={"0%"} underline={true}>
        Dates
      </TitleGeneralized>
      <Container>
        <Row>
          <Col className="calendar-content">
            <p className="text-justify mr-5">
              Lleidahack et dona la benvinguda a la HackEPS 2023, la primera
              hackató de les terres de Lleida!
            </p>
            <p className="text-justify mr-5">
              La setena edició de la HackEPS tindrà lloc a l'edifici de l'Escola
              Politècnica Superior de la Universitat de Lleida els dies 25 i 26
              de novembre de 2023. Aquest és un esdeveniment que no voldràs
              perdre't!
            </p>
            <p className="text-justify mr-5">
              Així que, si ets un apassionat de la tecnologia, amant dels reptes
              i defensor del treball en equip, la HackEPS 2023 és el teu lloc.
              Uneix-te a nosaltres per a una experiència inoblidable per a
              desenvolupar-te com a futur programador!
            </p>
          </Col>
          <Col>
            <div className="calendar-container">
              <Calendar
                value={[startDate, endDate]}
                locale={"ca"}
                minDetail={"month"}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CalendarDates;
