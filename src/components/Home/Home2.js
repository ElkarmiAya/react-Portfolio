import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
  <Row>
    <Col md={8} className="home-about-description">
      <h1 style={{ fontSize: "2.6em" }}>
        LET ME <span className="purple"> INTRODUCE </span> MYSELF
      </h1>
      <p className="home-about-body">
        I'm passionate about technology, especially when it comes to building reliable systems and automating processes. 
        <br />
        <br />I’ve explored areas like
        <i>
          <b className="purple"> Cloud Computing, DevOps, and Backend Development</b>
        </i>
        , and I enjoy working with tools like
        <i>
          <b className="purple"> Docker, Linux, and CI/CD pipelines</b>
        </i>
        .
        <br />
        <br />
        I also enjoy backend development using 
        <i>
          <b className="purple"> Laravel</b>
        </i>
        &nbsp; and exploring modern technologies like 
        <i>
          <b className="purple"> React.js</b>
        </i>.
        <br />
        <br />
        I'm always curious to learn new concepts and challenge myself with real-world projects.
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
      <h1>FIND ME ON</h1>
      <p>
        Feel free to <span className="purple">connect</span> with me
      </p>
      <ul className="home-about-social-links">
        <li className="social-icons">
          <a
            href="https://github.com/ayaelkarmi"
            target="_blank"
            rel="noreferrer"
            className="icon-colour home-social-icons"
          >
            <AiFillGithub />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://www.linkedin.com/in/ayaelkarmi/"
            target="_blank"
            rel="noreferrer"
            className="icon-colour home-social-icons"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://twitter.com/ayaelkarmi"
            target="_blank"
            rel="noreferrer"
            className="icon-colour home-social-icons"
          >
            <AiOutlineTwitter />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://www.instagram.com/ayaelkarmi"
            target="_blank"
            rel="noreferrer"
            className="icon-colour home-social-icons"
          >
            <AiFillInstagram />
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
