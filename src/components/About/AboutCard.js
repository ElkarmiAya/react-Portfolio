import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p style={{ textAlign: "justify" }}>
        Hi Everyone, I am <span className="purple">Aya ELKARMI </span>
        from <span className="purple"> Rabat, Morocco.</span>
        <br />
        I am currently a 4th-year engineering student at INPT, specialized in Cloud, DevOps, and IoT.
        <br />
        I enjoy exploring new technologies and working on real-world technical projects.
        <br />
        <br />
        Apart from coding, some other activities that I love to do:
      </p>
      <ul>
        <li className="about-activity">
          <ImPointRight /> Participating in tech competitions
        </li>
        <li className="about-activity">
          <ImPointRight /> Learning about DevOps & Cloud tools
        </li>
        <li className="about-activity">
          <ImPointRight /> Exploring new places and cultures
        </li>
      </ul>

      <p style={{ color: "rgb(155 126 172)" }}>
        "Always eager to learn and contribute to building reliable and impactful systems!"{" "}
      </p>
      <footer className="blockquote-footer">Aya ELKARMI</footer>
    </blockquote>
  </Card.Body>
</Card>

  );
}

export default AboutCard;
