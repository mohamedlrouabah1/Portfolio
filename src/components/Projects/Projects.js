import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import onconnect from "../../Assets/Projects/onconnect.png";
import alpesTransport from "../../Assets/Projects/alpestransport.png";
import StellaStone from "../../Assets/Projects/StellaStone.png";
import Foodies from "../../Assets/Projects/foodies.png";
import TextTranslation from "../../Assets/Projects/TextTranslation.png";
import BitcoinPrediction from "../../Assets/Projects/BitcoinPrediction.png";

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
              description="Personal project undertaken during my academic coursework; the objective was to scrape transportation websites for use with Wikibase"
              ghLink="https://github.com/mohamedlrouabah1/alpestransport"
              // demoLink="https://mohamedlrouabah1.github.io/alpestransport/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={StellaStone}
              isBlog={false}
              title="StellaStone"
              description="The StellaStone app is a simulation program for space travel experiences. It allows users to engage with historical events, explore space, and deepen their knowledge while enjoying an interactive experience. "
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
              imgPath={TextTranslation}
              isBlog={false}
              title="Text Translation"
              description="make Text Translation using transformers/GRU and LSTM models."
              ghLink="https://github.com/mohamedlrouabah1/DEEPL"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BitcoinPrediction}
              isBlog={false}
              title="BitcoinPrediction"
              description="make Bitcoin Prediction models and historical data to get the best prediction."
              ghLink="https://github.com/mohamedlrouabah1/BIGDATA"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
