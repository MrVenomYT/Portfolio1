import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiKalilinux,
  SiNetlify,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={3} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiKalilinux />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiHeroku />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiNetlify />
      </Col>
    </Row>
  );
}

export default Toolstack;
