import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import FoodDel from "../../Assets/Projects/FoodDel.png";
import menu from "../../Assets/Projects/menu.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few project I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={menu}
            
              title="Food Delivery"
              description="This is menu page where we can search for different food and when you tap a food you can see multiple restaurants. "
             
            />
          </Col>


         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FoodDel}
             // isBlog={false}
              title="Food Delivery Website"
description="Developed a responsive food delivery website using React,Spring Boot,Postgrsql for data store, JavaScript, HTML, and CSS, featuring food browsing, menu exploration, and an intuitive user interface for a smooth online ordering experience."
              
            />
          </Col>

        

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
