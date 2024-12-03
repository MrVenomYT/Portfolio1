import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
 import { FaDiscord } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I am a Front End Web developer with a vast array of knowledge 
            in many different front end languages.
              <br />
              <br />
              <i>
                <b className="purple">Websites and Discord Bots </b> {" "}
                <p>
                I specialize in building quality applications with  &nbsp;
                <b className="purple">
                HTML/CSS3, bootstrap, 
                </b>
                and have a huge experience in client-side  <b className="purple">
                JavaScript,
              especially jQuery, React/Redux</b> , and other frontend libraries and frameworks.
                </p>
              </i>
              <br />
            <i>
            <b className="purple">
                  {" "} 
              <hr/>
              </b>
              </i>
              <br />
              My current stack involves Mern Stack Technologies including
         
              <i>
              <b className="purple">
                  {" "} 
                  MongoDB, Express, ReactJS, and NodeJS 
              , Discord.js , quick.db </b> . My objective is simply to be the best developer that
              I can be and to contribute to the technology industry all that I know and can do. 
              I believe that my understanding of problem-solving and strong project management
              are also skills that have and will continue to contribute to my overall success as a developer. 
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/MrVenomYT"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/iHasil007"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/muhammad-hasil-603842166/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/muhammad_hasil_13/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://discord.gg/HEmshJuPXC"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaDiscord />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
<script src="https://js.stripe.com/v3/buy-button.js">
</script>

<stripe-buy-button
  buy-button-id="buy_btn_1QRLDII2m7bOkMy0KLgs33ad"
  publishable-key="pk_test_51QQR9MI2m7bOkMy0cd2yUENHruIPyJ5aVQY1qXLY3GvRsIERreuPh7YznZhBJH14kt7jDVoxPj7kWJcDOovaOUP800dCY7kQZj"
>
</stripe-buy-button>
  );
}
export default Home2;
