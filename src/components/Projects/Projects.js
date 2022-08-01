import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import ProjectCard1 from "./ProjectCards1";
import Particle from "../Particle";
import portfolio from "../../Assets/Projects/portfolio.gif";
import musicious2 from "../../Assets/Projects/musicious.gif";
import proshopmern from "../../Assets/Projects/proshopmern.gif";
import musicious from "../../Assets/Projects/musicious.gif";
import beta from "../../Assets/Projects/beta.gif";
import venombot from "../../Assets/Projects/venombot.gif";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={musicious}
              isBlog={false}
              title="Musicious"
              description="An advanced Music Bot Playlist support and reaction interactivity, Best Filters , Best UI , Own bot channel supported."
              ghLink="https://github.com/MrVenomYT/Musicous"
              demoLink="https://www.musicous.tk/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={venombot}
              isBlog={false}
              title="MrVenomYT"
              description="Fully user friendly moderation bot for your discord server that keep your server alive and secure from raids and having a log system too"
              ghLink="https://github.com/MrVenomYT/MrVenomYT"
              demoLink="https://discord.com/oauth2/authorize?client_id=865203502245609472&permissions=8&scope=bot"
            />
          </Col>

          <Col md={4} className="project-card-1">
            <ProjectCard1
              imgPath={proshopmern}
              isBlog={false}
              title="Proshop mern"
              description="An e-commerce website just for education purposes feel free visit if you want to see the demo version of Proshop mern"
              ghLink="https://github.com/MrVenomYT/proshop.git"
              demoLink="https://proshop-mern.herokuapp.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard1
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="My Other Portfolio Wesbite where you can get info about me including my Profession , Projects and Hobbies.If you like it you can use it for your portfolio website and i hope you like it make sure to gave me full credits"
              ghLink="https://github.com/MrVenomYT/Portfolio"
              demoLink="https://mrvenomyt.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard1
              imgPath={beta}
              isBlog={false}
              title="Portfolio Beta Version"
              description="My Other Portfolio Wesbite where you can get info about me including my Profession , Projects and Hobbies.If you like it you can use it for your portfolio website and i hope you like it make sure to gave me full credits"
              ghLink="https://github.com/MrVenomYT/Portfolio-beta"
              demoLink="https://www.hasil.tk/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard1
              imgPath={musicious2}
              isBlog={false}
              title="Musicous Dashboard"
              description="An older version Dashboard Musicous Bot you can use this one for music bot or any other bot as well full responsive site it is and feel free to use it as well and give me proper credit as well"
              ghLink="https://github.com/MrVenomYT/Musicious-dashboard/"
              demoLink="https://musicious-beta-dash.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
