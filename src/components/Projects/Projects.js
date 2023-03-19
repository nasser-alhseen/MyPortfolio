import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import boss from "../../Assets/boss.png";
import zmc from"../../Assets/zmc.png";
import suicide from "../../Assets/Projects/suicide.png";
import pafion from "../../Assets/pafion.png";

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
       

          <Col  md={4} className="project-card">
            <ProjectCard 
              imgPath={zmc}
              isBlog={false}
              title="ZMC Domestic Cargo"
              description="This App for suppliers registered by ZMC company and deals with them to for following their orders and keep tracking status changes on at home delivery orders inside Iraq."
              link="https://play.google.com/store/apps/details?id=com.zmc.dcmgmt&hl=en&gl=US"
            />
          </Col>
          <Col  md={4} className="project-card">
            <ProjectCard 
              imgPath={pafion}
              isBlog={false}
              title="Pafion Queen"
              description="Online Store for Najjar Soap Company ,That Helps Users To Discover The Latest Products of The Company."
              link="https://play.google.com/store/apps/details?id=com.nasser.queen_pafion2"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
