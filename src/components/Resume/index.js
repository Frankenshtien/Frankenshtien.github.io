import React from "react";
import { Jumbotron } from "react-bootstrap";

function Resume() {
  return (
    <div>
      <Jumbotron>
        <h1>Resume</h1>
        <h3>
          <a
            href="https://drive.google.com/file/d/1Ot7pIJVhxuWLdnOLwpbqW9Aj6xR73EEm/view?usp=sharing"
            //href="https://drive.google.com/file/d/1TYaA44VAuHPxbQnepJ1DET9jJ-Gm5506/view?usp=sharing"
            //download
            target="_blank"
          >
            Check out my resume here!
          </a>{" "}
        </h3>
      </Jumbotron>
    </div>
  );
}

export default Resume;
