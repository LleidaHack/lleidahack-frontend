import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Container, Row, Col } from "react-bootstrap";
import Button from "src/components/buttons/Button";
import { Link } from "react-router-dom";
import "src/components/hackeps/Login/Login.css";
import logo from "src/icons/hackLogoWellDone.png";
import { login } from "src/services/AuthenticationService";
import { useNavigate } from "react-router-dom";
import LoginForm from "src/components/hackeps/LoginForm/LoginForm";

const LoginPage = ({ nextScreen }) => {
  return (
    <div className="login-page">
      <div className="content bg-loginPage">
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <div>
                <img src={logo} className="App-logo mb-3" alt="logo" />
                <h2 className="text-white mb-4 h2-title ">Hola de nou!</h2>
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
