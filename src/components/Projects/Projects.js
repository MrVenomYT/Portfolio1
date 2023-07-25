import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import ProjectCard1 from "./ProjectCards1";
import Particle from "../Particle";
import portfolio from "../../Assets/Projects/portfolio.gif";
import rental from "../../Assets/Projects/rental.png";
import proshopmern from "../../Assets/Projects/proshopmern.gif";
import venomous from "../../Assets/Projects/venomous.png";
import beta from "../../Assets/Projects/beta.gif";
import vanilla from "../../Assets/Projects/vanila-food.png";

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
              imgPath={venomous}
              isBlog={false}
              title="Venomous"
              ghLink="https://github.com/MrVenomYT/venomous"
              demoLink="https://venomous-gold.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vanilla}
              isBlog={false}
              title="Vanilla Food Website"
              ghLink="https://github.com/MrVenomYT/vanilla-food-website"
              demoLink="https://vanilla-food-website.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card-1">
            <ProjectCard1
              imgPath={proshopmern}
              isBlog={false}
              title="Proshop mern"
              ghLink="https://github.com/MrVenomYT/proshop.git"
              demoLink="https://proshop-mern.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard1
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              ghLink="https://github.com/MrVenomYT/Portfolio"
              demoLink="https://mrvenomyt.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard1
              imgPath={beta}
              isBlog={false}
              title="Portfolio Beta Version"
              ghLink="https://github.com/MrVenomYT/Portfolio-beta"
              demoLink="https://www.hasil.tk/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard1
              imgPath={rental}
              isBlog={false}
              title="Rental Car Web App"
              ghLink="https://github.com/MrVenomYT/Rental-car-webapp.git"
              demoLink="https://rental-car-webapp.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
