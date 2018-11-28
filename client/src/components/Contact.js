import React from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <p>Contact</p>
        <Form className="contact-form">
          <FormGroup row>
            <Label for="exampleEmail" sm={2}>
              Your Email Address:
            </Label>
            <Col sm={10}>
              <Input
                className="contact-input"
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="*Not Required"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleText" sm={2}>
              Message:
            </Label>
            <Col sm={10}>
              <Input
                className="contact-input"
                type="textarea"
                name="text"
                id="exampleText"
              />
            </Col>
          </FormGroup>
          <FormGroup check row>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button>Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default Contact;
