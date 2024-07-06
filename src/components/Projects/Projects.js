import React from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {t('projects.recentWorks')} <strong className="purple">{t('projects.works')}</strong>
        </h1>
        <p style={{ color: "white" }}>
          {t('projects.recentProjects')}
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={onconnect}
              isBlog={false}
              title="AppConnect"
              description={t('projects.appconnectDescription')}
              ghLink="https://github.com/mohamedlrouabah1/onconnect"
              demoLink="https://mohamedlrouabah1.github.io/onconnect/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={alpesTransport}
              isBlog={false}
              title="alpesTransport"
              description={t('projects.alpesTransportDescription')}
              ghLink="https://github.com/mohamedlrouabah1/alpestransport"
              // demoLink="https://mohamedlrouabah1.github.io/alpestransport/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={StellaStone}
              isBlog={false}
              title="StellaStone"
              description={t('projects.stellaStoneDescription')}
              ghLink="https://github.com/mohamedlrouabah1/StellaStone"
              // demoLink="https://mohamedlrouabah1.github.io/StellaStone"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Foodies}
              isBlog={false}
              title="Foodies"
              description={t('projects.foodiesDescription')}
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
              description={t('projects.textTranslationDescription')}
              ghLink="https://github.com/mohamedlrouabah1/DEEPL"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BitcoinPrediction}
              isBlog={false}
              title="BitcoinPrediction"
              description={t('projects.bitcoinPredictionDescription')}
              ghLink="https://github.com/mohamedlrouabah1/BIGDATA"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
