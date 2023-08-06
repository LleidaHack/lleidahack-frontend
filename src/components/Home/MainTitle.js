// src/components/MainTitle.js

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import hackLogo from "../../icons/hack_icon_negre.png";
import './MainTitle.css';

const MainTitle = () => {

    return (
    <div id="home" style={{backgroundColor: "var(--primary)"}}>
          <div className="row join-container p-5 text-center m-auto">
            <div className="col-12">
              <div className="row">
                <img className="p-5" src={hackLogo} alt="" />
              </div>
              <div className="row text-center">
                <a
                  href="#"
                  style={{ width: `fit-content`, textDecoration: `none` }}
                  className="py-2 px-4 m-auto apuntat-button"
                >
                  Apunta't!
                </a>
              </div>
            </div>
          </div>
        </div>);
};

export default MainTitle;