import React from "react";
import { Container, Row, Jumbotron } from "react-bootstrap";

function Contact() {
  return (
    <Jumbotron>
      <Container fluid>
        <Row>
          <h1>Contact</h1>
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
      </Container>
    </Jumbotron>
    // <div>
    //   <Container fluid>
    //     <Row className="justify-content-md-center">
    //       <Form
    //         onSubmit={handleSubmit}
    //         style={{ width: "35rem", margin: "50px", paddingBottom: "15px" }}
    //       >
    //         <Form.Group controlId="formName" onBlur={handleChange}>
    //           <Form.Label>Name</Form.Label>
    //           <Form.Control
    //             type="text"
    //             placeholder="Enter your preferred name"
    //             required
    //           />
    //         </Form.Group>

    //         <Form.Group controlId="formEmail" onBlur={handleChange}>
    //           <Form.Label>Email address</Form.Label>
    //           <Form.Control type="email" placeholder="Enter email" required />
    //         </Form.Group>

    //         <Form.Group controlId="formMessage" onBlur={handleChange}>
    //           <Form.Label>Message</Form.Label>
    //           <Form.Control as="textarea" type="text" required />
    //         </Form.Group>
    //         <Button variant="primary" type="submit">
    //           Submit
    //         </Button>
    //       </Form>
    //     </Row>
    //   </Container>
    // </div>
  );
}

export default Contact;
