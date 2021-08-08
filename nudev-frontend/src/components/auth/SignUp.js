import React from "react";

import { useAuth } from "../../contexts/AuthContext";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { SignUpStyle } from "./SignUpStyle";

const SignUp = () => {
  return (
    <SignUpStyle>
      <Form>
        <Form.Text className="text-muted">SIGN UP TO GET STARTED</Form.Text>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="form-label">Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </SignUpStyle>
  );
};

export default SignUp;
