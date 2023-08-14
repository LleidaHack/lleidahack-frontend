// src/components/QrCode.js

import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import "./QrCode.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const QrCode = (props) => {
  const [url, setUrl] = useState(props.url);

  const qrcode = (
    <QRCodeCanvas
      id="qrCode"
      value={url}
      size={200}
      bgColor={"#F7F7F2"}
      level={"H"}
    />
  );
  return (
    <Container>
      <Row>
        <Col
          id="ticket_col"
          className={"border mx-auto m-3 text-center"}
          md={4}
        >
          <h1>Ticket</h1>
          <p>
            Quan estiguis en un esdeveniment actiu, aquí apareixeran els tickets
            que necessitis (acreditació, menjador...)
          </p>
          <div className="qrcode__container" style={{ margin: 30 }}>
            <div style={{ margin: "auto" }}>{qrcode}</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default QrCode;
