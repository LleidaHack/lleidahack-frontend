import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Container, Row, Col, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';
import logo from '../../icons/llhlogow.png';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Usuari o correu invàlid').required('Usuari o correu requerit'),
  password: Yup.string().required('Contrassenya requerida'),
});

const LoginPage = () => {
  const handleSubmit = (values, { setSubmitting }) => {
   console.log("iniciant sessió...")
  };

  return (
    <div className="login-page">
    
      <div className="content">
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <div className="login-container">
                <img src={logo} className="App-logo" alt="logo" />
                <h2 className="mb-4 h2-title">Hola de nou!</h2>
                <Formik
                  initialValues={{ email: '', password: '' }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                  submitButton={{ label: "Envia" }}
                >
                  {({ isSubmitting, errors, touched }) => (
                    <Form>
                      <div className="form-group">
                        <label htmlFor="email">Usuari o correu</label>
                        <Field
                          type="email"
                          name="email"
                          id="email"
                          className={`form-control ${
                            touched.email && errors.email ? 'is-invalid' : ''
                          }`}
                        />
                        {touched.email && errors.email && (
                          <div className="invalid-feedback">{errors.email}</div>
                        )}
                      </div>
                      <div className="form-group">
                        <label htmlFor="password">Contrassenya</label>
                        <Field
                          type="password"
                          name="password"
                          id="password"
                          className={`form-control ${
                            touched.password && errors.password
                              ? 'is-invalid'
                              : ''
                          }`}
                        />
                        {touched.password && errors.password && (
                          <div className="invalid-feedback">
                            {errors.password}
                          </div>
                        )}
                      </div>
                      
                      <div className="redirects">
                        <p className="mb-1">
                          <Link to="/forgot-password" className='custom-link'>Has oblidat les teves credencials?</Link>
                        </p>
                        <p className="mb-0">
                          <Link to="/sign-up" className='custom-link'>Encara no tens compte?</Link>
                        </p>
                      </div>
                      <div className='button-container'>

                  
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className='btn btn-default'
                      > 
                        {isSubmitting ? 'Iniciant sessió...' : 'Inicia sessió'}
                      </Button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default LoginPage;
