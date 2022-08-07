import { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CalendarDates = () => {
  const [startDate, setStartDate] = useState(new Date(2022, 10, 25));
  const [endDate, setEndDate] = useState(new Date(2022, 10, 27));

  return (
    <div className='app' style={{'backgroundColor': '#202225'}}>
      <h1 className='text-center' style={{'color': 'white'}}>Dates</h1>

        <Container>
            <Row>
                <Col style={{'color': 'white'}}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid.</p>
                </Col>
                <Col>
                    <div className='calendar-container'>
                        <Calendar value={[startDate, endDate]} locale={'ca'} />
                    </div>
                </Col>
            </Row>
        </Container>


    </div>
  );
}

export default CalendarDates
