import React from "react";
import { Container, Row, Jumbotron } from "react-bootstrap";

function Contact() {
  return (
    <Container fluid>
      <Jumbotron>
        <Row>
          <h2>Contact</h2>
        </Row>
        <Row>
          <h3>
            <address>
              Feel free to email me at{" "}
              <a href="mailto:barber.von.frankenshtien@gmail.com">
                barber.von.frankenshtien@gmail.com
              </a>
              <br></br>
              Or text me at <a href="tel:8015999767">801.599.9767</a>
            </address>
          </h3>
        </Row>
      </Jumbotron>
    </Container>
  );
}

export default Contact;
