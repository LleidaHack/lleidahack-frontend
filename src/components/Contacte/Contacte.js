import React from 'react';
import './Contacte.css';
import logo from '../../icons/imagotip_lleidahack_blanc.png';
import instagramLogo from '../../icons/instagram.png';
import linkedinLogo from '../../icons/linkedin.png';
import twitterLogo from '../../icons/twitter.png';

const ContactePage = () => {
    return (
    <div className="container-all">
      <h1 className="title-contacte">Contacte</h1>
      <div className="contact-container">
        <div className="logo-container">
          <h2 className="title-logo">Esdeveniment organitzat per LleidaHack</h2>
          <img src={logo} alt="Logo" className="logo" />
          <div className="social-logos">
            <a href="https://www.instagram.com/lleidahack" target="_blank" rel="noopener noreferrer">
              <img src={instagramLogo} alt="Instagram" className="social-logo" />
            </a>
            <a href="https://www.linkedin.com/company/lleidahack" target="_blank" rel="noopener noreferrer">
              <img src={linkedinLogo} alt="LinkedIn" className="social-logo" />
            </a>
            <a href="https://www.twitter.com/lleidahack" target="_blank" rel="noopener noreferrer">
              <img src={twitterLogo} alt="Twitter" className="social-logo" />
            </a>
          </div>
        </div>
        <div className="form-container">
          <form action="mailto:laura.haro@lleidahack.dev" method="post" encType="text/plain">
            <label htmlFor="name">Nom:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Correu:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="subject">Títol del missatge:</label>
            <input type="text" id="subject" name="subject" required />

            <label htmlFor="message">Missatge:</label>
            <textarea id="message" name="message" rows="4" required />

            <div className="button-submit-container">
              <button className="button-submit" type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
  };
  
  export default ContactePage;
  