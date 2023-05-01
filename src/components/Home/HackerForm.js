// src/components/HackerForm.js

import { useState } from "react";
import './HackerForm.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styled from '@emotion/styled'
import { CDBStepper, CDBStep, CDBInput, CDBSelect, CDBBtn, CDBContainer } from "cdbreact";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const HackerForm = () => {
  const [active, setActive] = useState(1);

  const handleNextPrevClick = a => setActive(a);
  return (
      <CDBStepper>
        <CDBStep
          id={1}
          icon="pencil-alt"
          name="Informació personal"
          handleClick={() => handleNextPrevClick(1)}
          active={active}
          component={<Step1 handleNextPrevClick={handleNextPrevClick} />}
        />
        <CDBStep
          id={2}
          icon="info-circle"
          name="Contacte"
          handleClick={() => handleNextPrevClick(2)}
          active={active}
          component={<Step2 handleNextPrevClick={handleNextPrevClick} />}
        />
        <CDBStep
          id={3}
          icon="user-circle"
          name="Avatar"
          handleClick={() => handleNextPrevClick(3)}
          active={active}
          component={<Step3 handleNextPrevClick={handleNextPrevClick} />}
        />
      </CDBStepper>
  );
};

export default HackerForm;

const HackerPanel = () => {
    return (
        <Col>
                <Row>
                    <img src={require('../../imgs/hacker_image.svg').default} alt='Hacker' />
                </Row>
                <Row>
                <div
                    style={{
                        textAlign: 'center',
                        padding: '20px 0 10px 0',
                        color: '#F5F5F5',
                        fontSize: '30px',
                        fontWeight: 'regular',
                    }}
                    >
                    Hacker
                    </div>
                    </Row>
                </Col>

    );
};

const Step3 = ({ handleNextPrevClick }) => {
  return (
    <StepContainer>
      <div style={{ width: '100%', background: '#232323', padding: '30px 10px', height: '100%' }}>
        <div
          style={{
            margin: '0 auto',
            maxWidth: '500px',
            borderRadius: '10px',
            background: '#232323',
            boxShadow: '0px 4px 10px 0 rgba(0, 0, 0, 0.05)',
          }}
        >
          <FlexColumnContainer>
            <div
              style={{
                textAlign: 'center',
                padding: '20px 0 10px 0',
                color: '#F5F5F5',
                fontSize: '30px',
                fontWeight: 'bold',
              }}
            >
              Avatar
            </div>
            <Row>
              <Col>
                <CDBInput type="text" color="secondary" label="Profile photo" />
              </Col>
              <Col>
                <CDBInput type="text" color="secondary" label="Nickname" />
                </Col>
            </Row>
              <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-around' }}>
                <CDBBtn
                    color="#A40925"
                    flat
                    className="float-start"
                    circle={false}
                    outline
                    onClick={() => handleNextPrevClick(2)}
                    >
                    Enrere
                </CDBBtn>
                <CDBBtn
                  className="float-end"
                  flat
                  color="secondary"
                  circle={false}
                  onClick={() => handleNextPrevClick(4)}
                >
                  Envia
                </CDBBtn>
              </div>
            </FlexColumnContainer>
        </div>
      </div>
    </StepContainer>
  );
};

const Step2 = ({ handleNextPrevClick }) => {
    const [shirtOptions] = useState([
        {
          text: 'S',
          value: 'S',
        },
        {
          text: 'M',
          value: 'M',
        },
        {
          text: 'L',
          value: 'L',
        },
        {
            text: 'XL',
            value: 'XL',
        },
      ]);

  return (
    <StepContainer>
      <div style={{ width: '100%', background: '#232323', padding: '30px 10px', height: '100%' }}>
        <div
          style={{
            margin: '0 auto',
            maxWidth: '90%',
            borderRadius: '10px',
            background: '#232323',
            boxShadow: '0px 4px 10px 0 rgba(0, 0, 0, 0.05)',
          }}
        >
          <FlexColumnContainer>
                <Row style={{width:"90%"}}>
                    <HackerPanel></HackerPanel>
                    <Col>
                    <div
                        style={{
                            textAlign: 'center',
                            padding: '20px 0 10px 0',
                            color: '#F5F5F5',
                            fontSize: '30px',
                            fontWeight: 'bold',
                        }} >
                        Crear compte
                        </div>
                        <CDBInput color="secondary" label="Telèfon" />
                        <CDBInput type="email" color="secondary" label="E-mail" />
                        <label style={{ marginBottom: '20px', display: 'flex', justifyContent: 'flex-start' }}>Talla de samarreta</label>
                        <CDBSelect style={{ width:"100%" }} options={shirtOptions} />
                        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-start' }}>
                            <CDBBtn
                            color="#A40925"
                            flat
                            className="float-start"
                            circle={false}
                            outline
                            onClick={() => handleNextPrevClick(1)}
                            >
                            Enrere
                            </CDBBtn>
                            <CDBBtn
                            color="#A40925"
                            circle={false}
                            flat
                            className="float-end"
                            onClick={() => handleNextPrevClick(3)}
                            >
                            Següent
                            </CDBBtn>
                        </div>
                    </Col>
                </Row>
          </FlexColumnContainer>
        </div>
      </div>
    </StepContainer>
  );
};

const Step1 = ({ handleNextPrevClick }) => {
  return (
    <StepContainer>
      <div style={{ width: '100%', background: '#232323', padding: '30px 10px', height: '100%' }}>
        <div
          style={{
            margin: '0 auto',
            maxWidth: '90%',
            borderRadius: '10px',
            background: '#232323',
            boxShadow: '0px 4px 10px 0 rgba(0, 0, 0, 0.05)',
          }}
        >
          <FlexColumnContainer>
            <Row>
                <HackerPanel></HackerPanel>
                <Col>
                        <div
                    style={{
                        textAlign: 'center',
                        padding: '20px 0 10px 0',
                        color: '#F5F5F5',
                        fontSize: '30px',
                        fontWeight: 'bold',
                    }}
                    >
                    Crear compte
                    </div>

                        <CDBInput type="text" color="secondary" label="Nom" />
                        <Row>
                            <Col>
                                <CDBInput type="text" color="secondary" label="Cognom 1" />
                            </Col>
                            <Col>
                                <CDBInput type="text" color="secondary" label="Cognom 2" />
                            </Col>
                        </Row>
                        <CDBInput type="date" color="secondary" label="Data de naixement" />
                        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-start' }}>
                            <CDBBtn
                            flat
                            circle={false}
                            className="float-end"
                            onClick={() => handleNextPrevClick(2)}
                            >
                            Següent
                            </CDBBtn>
                        </div>
                </Col>
            </Row>

            
          </FlexColumnContainer>
        </div>
      </div>
    </StepContainer>
  );
};

const FlexColumnContainer = styled('div')`
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: ${props => props.width};
  justify-content: ${props => (props.justifyContent ? props.justifyContent : 'center')};
  align-items: ${props => (props.alignItems ? props.alignItems : 'center')};
  box-sizing: border-box;
`;

const StepContainer = styled('div')`
  width: 100%;
  height: 100%;
`;