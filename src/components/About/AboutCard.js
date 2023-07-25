import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Muhammad Hasil </span>
            from <span className="purple"> Lahore, Pakistan.</span>
            <br />I am a Front End Web developer with a vast array of knowledge 
            in many different front end languages.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Developing Stuff
            </li>
            <li className="about-activity">
              <ImPointRight /> Gaming
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Muhammad Hasil</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
