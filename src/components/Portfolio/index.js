import React from "react";
import { Card, Button, Container, Row } from "react-bootstrap";
import { Projects } from "../../assets/Projects";

function Portfolio() {
  const projects = Projects;

  return (
    <div>
      <Container fluid>
        <Row className="justify-content-md-center">
          {projects.map((project) => (
            <Card
              key={project.title}
              style={{ width: "35rem", margin: "25px" }}
            >
              <Card.Img
                variant="top"
                src={require(`../../assets/photos/${project.photo}`)}
              />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button href={project.link} target="_blank" variant="info">
                  Check it out
                </Button>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Portfolio;
