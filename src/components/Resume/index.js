import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

function Resume() {
  return (
    <Container fluid>
      <Jumbotron>
        <h2>Resume</h2>
        <p>
          <a href={require("../../assets/downloads/Resume.pdf")} download>
            Check out my resume here!
          </a>
        </p>
      </Jumbotron>
    </Container>
  );
}

export default Resume;
