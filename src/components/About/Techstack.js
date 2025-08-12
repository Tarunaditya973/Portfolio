import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiKubernetes,
  SiDocker,
  SiTerraform,
  SiJenkins,
  SiGithubactions,
  SiArgo,
  SiPrometheus,
  SiGrafana,
  SiAmazonaws,
  SiMicrosoftazure,
  SiGooglecloud,
  SiGit,
  SiAnsible,
  SiHelm,
  SiIstio,
  SiVault,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTerraform />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiJenkins />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiGithubactions />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiArgo />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiPrometheus />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiGrafana />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiGooglecloud />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiAnsible />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiHelm />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIstio />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiVault />
      </Col> */}
    </Row>
  );
}

export default Techstack;
