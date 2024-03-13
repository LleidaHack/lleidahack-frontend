import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import "src/components/Home/QrCode.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect } from "react";
import TitleGeneralized from "../TitleGeneralized/TitleGeneralized";

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
        <Col id="ticket_col" className={"mx-auto m-3 text-center"}>
          <TitleGeneralized
            bold={false}
            margeBot="0.5rem"
            lettersColor={"secondary"}
          >
            Ticket
          </TitleGeneralized>
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
