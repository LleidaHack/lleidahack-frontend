import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
<<<<<<<< HEAD:src/components/Home/QrCode.js
import "src/components/Home/QrCode.css";
========
import "src/components/hackeps/QrCode/QrCode.css";
>>>>>>>> origin/integration:src/components/hackeps/QrCode/QrCode.js
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect } from "react";

const QrCode = (props) => {
  const [url, setUrl] = useState(props.url);

  useEffect(() => {
    setUrl(props.url);
  }, [props.url]);

  const qrcode = (
    <QRCodeCanvas id="qrCode" value={url} size={200} level={"H"} />
  );
  return (
    <Container>
      <Row>
<<<<<<<< HEAD:src/components/Home/QrCode.js
        <Col id="ticket_col" className={"mx-auto m-3 text-center"}>
          <h1>Ticket</h1>
========
        <Col id="bg-white" className={"mx-auto m-3 text-center"}>
          <TitleGeneralized marginBot="2">Ticket</TitleGeneralized>
>>>>>>>> origin/integration:src/components/hackeps/QrCode/QrCode.js
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
