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
              I fell in love with Devops and systems and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />
              My core expertise lies in{" "}
              <i>
                <b className="purple">Kubernetes Setup & Troubleshooting</b>
              </i>
              , where I excel at designing, deploying, and maintaining robust cluster architectures. I specialize in resolving complex Kubernetes issues, optimizing cluster performance, and implementing best practices for production environments.
              <br />
              <br />
              I'm passionate about{" "}
              <i>
                <b className="purple">CI/CD Pipeline Automation</b>
              </i>
              , building seamless deployment workflows using{" "}
              <i>
                <b className="purple">GitHub Actions and ArgoCD</b>
              </i>
              . I create end-to-end automation that accelerates development cycles and ensures reliable deployments.
              <br />
              <br />
              I am fluent in classics like
              <i>
                <b className="purple"> Kubernetes, Docker, Terraform, Cloud </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Clusters and Pipelines </b> and
                also in areas related to{" "}
                <b className="purple">
                  Software development and AI.
                </b>
              </i>
              <br />
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
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Tarunaditya973"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/ITarunaditya"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/tarun-aditya-4416b41b9/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/tarunaditya973"
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
