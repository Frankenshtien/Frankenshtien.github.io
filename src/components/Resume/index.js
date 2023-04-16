import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

function Resume() {
  return (
    <Container fluid>
      <Jumbotron>
        <h2>Resume</h2>
        <h3>
          <a href={require("../../assets/downloads/Resume.pdf")} download>
            Check out my resume here!
          </a>
        </h3>
      </Jumbotron>
    </Container>
  );
}

export default Resume;
