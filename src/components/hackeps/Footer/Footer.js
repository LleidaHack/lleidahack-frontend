import React from "react";
import instagramIcon from "src/icons/instagram.png";
import linkedinIcon from "src/icons/linkedin.png";
import twitterIcon from "src/icons/X.png";

const Footer = () => {
  return (
    <footer className="p-12 text-center left-0 bottom-0 w-full font-bold bg-primaryHackeps text-textPrimaryHackeps">
      <div className="container">
        <div className="flex justify-center mb-2">
          <a
            href="https://twitter.com/hackeps"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitterIcon} alt="Twitter" class="w-8 mx-1.5" />
          </a>
          <a
            href="https://www.linkedin.com/company/hackeps/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn" class="w-8 mx-1.5" />
          </a>
          <a
            href="https://www.instagram.com/hackeps_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" class="w-8 mx-1.5" />
          </a>
        </div>
      </div>
      <div className="footer-links">
        <a
          className="no-underline hover:font-bold text-textPrimaryHackeps"
          href="/hackeps/terms"
          target="_blank"
          rel="noopener noreferrer"
        >
          Termes i Condicions
        </a>
        <span className="footer-separator"> | </span>

        <a
          className="no-underline hover:font-bold text-textPrimaryHackeps"
          href="/hackeps/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Política de Privadesa
        </a>
      </div>
      <div className="mt-4 footer-links ">
        Made with ❤️ by{" "}
        <a
          className="no-underline hover:font-bold text-textPrimaryHackeps"
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
