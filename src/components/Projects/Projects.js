import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import onconnect from "../../Assets/Projects/onconnect.png";
import alpesTransport from "../../Assets/Projects/alpestransport.png";
import StellaStone from "../../Assets/Projects/StellaStone.png";
import Foodies from "../../Assets/Projects/foodies.png";
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
              imgPath={onconnect}
              isBlog={false}
              title="AppConnect"
              description="APPConnect is a dedicated platform for managing missions or projects. It is designed to help professionals and companies organize, plan, and track their tasks and activities without going through an intermediary."
              ghLink="https://github.com/mohamedlrouabah1/onconnect"
              demoLink="https://mohamedlrouabah1.github.io/onconnect/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={alpesTransport}
              isBlog={false}
              title="alpesTransport"
              description="Wikibase is an open-source platform developed by the Wikimedia Foundation that stores, manages and publishes structured and linked data using Semantic Web technologies such as RDF (Resource Description Framework) and SPARQL (SPARQL Protocol and RDF Query Language)."
              ghLink="https://github.com/mohamedlrouabah1/alpestransport"
              // demoLink="https://mohamedlrouabah1.github.io/alpestransport/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={StellaStone}
              isBlog={false}
              title="StellaStone"
              description="The StellaStone app is a program designed to perform space travel simulations. It offers you the opportunity to experience or relive historical moments, to explore and deepen your knowledge of space while having fun. Learning how to use this software is not complex, but requires a good understanding of the terms, concepts, and methods used in the application. It is recommended that you consult this manual before using the software. This user guide provides an overview of the app's features and features, as well as instructions on how to master these various features."
              ghLink="https://github.com/mohamedlrouabah1/StellaStone"
              // demoLink="https://mohamedlrouabah1.github.io/StellaStone"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Foodies}
              isBlog={false}
              title="Foodies"
              description="The Foodies application main use is to use RDFs graph scrapped from website page and display them in format of annuary of restaurants and their menus."
              ghLink="https://github.com/mohamedlrouabah1/WEBSEM"
              demoLink="https://foodies-ldp-e2f3380fb9a9.herokuapp.com/"  
              demoLink2="https://dsc2-sw-food-delivery-b3a7e3e908fb.herokuapp.com/#/"            
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Foodies}
              isBlog={false}
              title="Foodies"
              description="The Foodies application main use is to use RDFs graph scrapped from website page and display them in format of annuary of restaurants and their menus."
              ghLink="https://github.com/mohamedlrouabah1/WEBSEM"
              demoLink="https://foodies-ldp-e2f3380fb9a9.herokuapp.com/"  
              demoLink2="https://dsc2-sw-food-delivery-b3a7e3e908fb.herokuapp.com/#/"            
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
