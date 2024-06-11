import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import onconnect from "../../Assets/Projects/onconnect.png";
import alpesTransport from "../../Assets/Projects/alpestransport.png";
import StellaStone from "../../Assets/Projects/StellaStone.png";
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
              demoLink="https://mohamedlrouabah1.github.io/alpestransport/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={StellaStone}
              isBlog={false}
              title="StellaStone"
              description="The StellaStone app is a program designed to perform space travel simulations. It offers you the opportunity to experience or relive historical moments, to explore and deepen your knowledge of space while having fun. Learning how to use this software is not complex, but requires a good understanding of the terms, concepts, and methods used in the application. It is recommended that you consult this manual before using the software. This user guide provides an overview of the app's features and features, as well as instructions on how to master these various features."
              ghLink="https://github.com/mohamedlrouabah1/StellaStone"
              demoLink="https://mohamedlrouabah1.github.io/StellaStone"              
            />
          </Col>

          <Col md={4} className="project-card">
            {/* <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            /> */}
          </Col>

          <Col md={4} className="project-card">
            {/* <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            /> */}
          </Col>

          <Col md={4} className="project-card">
            {/* <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            /> */}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
