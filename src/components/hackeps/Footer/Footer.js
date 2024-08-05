import React from "react";
import "src/components/hackeps/Footer/Footer.css"; // Importa el archivo de estilos CSS para el footer
import instagramIcon from "src/icons/instagram.png";
import linkedinIcon from "src/icons/linkedin.png";
import twitterIcon from "src/icons/X.png";

const Footer = () => {
  return (
    <footer className="footer bg-primaryHackeps text-textPrimaryHackeps">
      <div className="container">
        <div className="social-icons">
          <a
            href="https://twitter.com/hackeps"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitterIcon} alt="Twitter" />
          </a>
          <a
            href="https://www.linkedin.com/company/hackeps/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a
            href="https://www.instagram.com/hackeps_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" />
          </a>
        </div>
      </div>
      <div className="footer-links ">
        <a className="text-textPrimaryHackeps" href="/hackeps/terms" target="_blank" rel="noopener noreferrer">
          Termes i Condicions
        </a>
        <span className="footer-separator"> | </span>

        <a className="text-textPrimaryHackeps" href="/hackeps/privacy" target="_blank" rel="noopener noreferrer">
          Política de Privadesa
        </a>
      </div>
      <div className="made-by footer-links ">
        Made with ❤️ by{" "}
        <a
          className="text-textPrimaryHackeps"
          href="https://lleidahack.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LleidaHack
        </a>
      </div>
    </footer>
  );
};

export default Footer;
