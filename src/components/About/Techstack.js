import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiOutlineHtml5 } from "react-icons/ai";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiCss3Full,
 
} from "react-icons/di";
import {
  SiRedux,
  SiJquery,
  
} from "react-icons/si";
import{
  BsBootstrap,
} from "react-icons/bs"
import {
  FaDiscord,

} from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <AiOutlineHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJquery />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3Full />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDiscord />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsBootstrap />
      </Col>
    </Row>
  );
}

export default Techstack;
