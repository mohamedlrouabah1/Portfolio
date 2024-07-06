import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn, FaMailBulk } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Home2() {
  const { t } = useTranslation();

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              {t('home2.intro')}
              <span className="purple"> {t('home2.title')}</span>
            </h1>
            <p className="home-about-body">
              {t('home2.body')}
              <br />
              <br />{t('home2.languages')}
              <i>
                <b className="purple"> {t('home2.skills')}</b>
              </i>
              <br />
              <br />
              {t('home2.interests')}
              <i>
                <b className="purple"> {t('home2.interestsDetail')}</b>
              </i>
              <br />
              
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
            <h1>{t('home2.findMe')}</h1>
            <p>
              {t('home2.connect')}
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/mohamedlrouabah1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mohammed-rouabah-b476b224a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:mohamedlrouabah@icloud.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaMailBulk />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
