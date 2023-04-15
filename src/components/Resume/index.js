import React from "react";
import { Jumbotron } from "react-bootstrap";

function Resume() {
  return (
    <div>
      <Jumbotron>
        <h1>Resume</h1>
        <h3>
          <a href={require("../../assets/downloads/Resume.pdf")} download>
            Check out my resume here!
          </a>
        </h3>
      </Jumbotron>
    </div>
  );
}

export default Resume;
