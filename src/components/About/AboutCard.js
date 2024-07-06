import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useTranslation } from "react-i18next";

function AboutCard() {
  const { t } = useTranslation();

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {t("about.quote1")}<span className="purple"> {t("about.quote2")} </span>
            {t("about.quote3")} <span className="purple"> {t("about.quote4")} </span>
            <br />
            {t("about.quote5")}
            <br />
            {t("about.quote6")}
            <br />
            {t("about.quote7")}
            <br />
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> {t("about.activities.playingGames")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("about.activities.microsoldering")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("about.activities.travelling")}
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
