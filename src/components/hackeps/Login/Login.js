import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import logo from "src/icons/hackLogoWellDone.png";

import LoginForm from "src/components/hackeps/LoginForm/LoginForm";

const LoginPage = ({ nextScreen }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 flex items-center justify-center bg-loginPage">
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <div className="rounded-xl flex flex-col items-center">
                <img
                  src={logo}
                  className="w-48 h-auto block mx-auto mb-3"
                  alt="Logo"
                />
                <h2 className="text-white mb-2 text-5xl flex items-center text-center">
                  Hola de nou!
                </h2>
                <LoginForm nextScreen={nextScreen} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default LoginPage;
