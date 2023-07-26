import React from "react";
import "./Footer.css"; // Importa el archivo de estilos CSS para el footer
import instagramIcon from "../../icons/instagram_negre.png";
import linkedinIcon from "../../icons/linkedin_negre.png";
import twitterIcon from "../../icons/twitter_negre.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-icons">
          <a href="https://www.instagram.com/hackeps_/" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/company/hackeps/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="https://twitter.com/hackeps" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" />
          </a>
        </div>
        
      </div>
      <div className="footer-links">
        <a href="https://lleidahack.dev/" target="_blank" rel="noopener noreferrer">
          Termes i Condicions 
        </a>
        <span className="footer-separator"> | </span>
        
        <a href="https://lleidahack.dev/politica-de-privacidad" target="_blank" rel="noopener noreferrer">
          Política de Privadesa
        </a>
      </div>
      <div className="made-by footer-links">
        Made with <span className="heart">&hearts;</span> by <a href="https://lleidahack.dev/" target="_blank" rel="noopener noreferrer">LleidaHack</a>
      </div>
    </footer>
  );
};

export default Footer;