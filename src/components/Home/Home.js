import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { motion } from "framer-motion";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
            {/* Left Column */}
            <Col md={7} className="home-header">
              <motion.h1
                style={{ paddingBottom: 15 }}
                className="heading"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </motion.h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Muhammad Hasil</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <Button
                  variant="primary"
                  size="lg"
                  href="#portfolio"
                  className="mt-3"
                >
                  View Portfolio
                </Button>
                <Button
                  variant="outline-light"
                  size="lg"
                  href="#contact"
                  className="mt-3 ml-3"
                >
                  Contact Me
                </Button>
              </motion.div>
            </Col>

            {/* Right Column */}
            <Col md={5} className="text-center">
              <motion.img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      <stripe-buy-button
        buy-button-id="buy_btn_1QRLDII2m7bOkMy0KLgs33ad"
        publishable-key="pk_test_51QQR9MI2m7bOkMy0cd2yUENHruIPyJ5aVQY1qXLY3GvRsIERreuPh7YznZhBJH14kt7jDVoxPj7kWJcDOovaOUP800dCY7kQZj"
      ></stripe-buy-button>
    </section>
  );
}

export default Home;
