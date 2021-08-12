import React, { useRef, useState } from "react";

import { useAuth } from "../../contexts/AuthContext";
import firebase from "firebase";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { SignUpStyle } from "./SignUpStyle";

const Login = ({ showSignUp }) => {
  const { login } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);

    try {
      await login(emailRef.current.value, passwordRef.current.value);
      const currentUser = firebase.auth().currentUser;
      console.log(currentUser);
    } catch {
      console.log("Failed to make login");
    }
  };

  return (
    <SignUpStyle>
      <Form onSubmit={handleSubmit}>
        <Form.Text className="text-muted">LOGIN TO GET STARTED</Form.Text>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="form-label">Email</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
        <Button variant="primary" type="submit">
          {showSignUp ? "sign up" : "login"}
        </Button>
      </Form>
    </SignUpStyle>
  );
};

export default Login;
