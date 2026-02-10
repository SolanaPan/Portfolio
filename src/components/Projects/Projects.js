import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tonPresale from "../../Assets/Projects/ton-presale.png";
import emotion from "../../Assets/Projects/emotion.png";
import trustiq from "../../Assets/Projects/trustiq.png";
import volumexCash from "../../Assets/Projects/volumexCash.png";
import suicide from "../../Assets/Projects/suicide.png";
import cyla from "../../Assets/Projects/cyla.png";

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
              imgPath={volumexCash}
              isBlog={false}
              title="VolumeX Cash"
              description="A private transfer system on the Solana blockchain using Zero-Knowledge (ZK) proofs is a mechanism that enables users to send digital assets while keeping transaction details confidential. Unlike standard blockchain transfers—where sender, receiver, and amount are publicly visible—this system hides those details from everyone except the parties involved."
              ghLink="https://github.com/SolanaPan/zkcash"
              demoLink="https://volumex.fund/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cyla}
              isBlog={false}
              title="Twitter AI Agent"
              description="Cyla is a project described as a self-learning artificial intelligence system designed to explore and learn the Solana blockchain and its ecosystem. Its purpose is to understand the technology, concepts, and activity within Solana over time, using adaptive AI methods rather than working as a typical tutorial site or static course."
              ghLink="https://github.com/SolanaPan/cyla"
              demoLink="https://cyla-dusky.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trustiq}
              isBlog={false}
              title="Solana Escrow System"
              description="A Solana escrow system is a smart-contract-based mechanism that acts as a neutral middleman to securely hold digital assets (like SOL, tokens, or NFTs) during a transaction. The purpose is to ensure that funds or assets are only released when agreed-upon conditions are met, reducing risk for both parties."
              ghLink="https://github.com/SolanaPan/trustiq"
              demoLink="https://trustiq-six.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tonPresale}
              isBlog={false}
              title="Presale Platform"
              description="A presale on a blockchain is a fundraising event that occurs before a cryptocurrency token or project is officially launched to the public. It allows early investors to purchase tokens at a discounted price or under special conditions, usually to help fund development, marketing, and initial ecosystem growth."
              ghLink="https://github.com/SolanaPan/ton-presale"
              demoLink="https://ton-presale-front.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/SolanaPan/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/SolanaPan/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
