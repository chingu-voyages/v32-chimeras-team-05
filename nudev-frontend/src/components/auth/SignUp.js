import React, { useRef, useState } from "react";

import { useAuth } from "../../contexts/AuthContext";
import firebase from "firebase";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { SignUpStyle } from "./SignUpStyle";

const SignUp = () => {
  const { signup } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);

    if (passwordConfirmRef.current.value !== passwordRef.current.value) {
      return alert("Passwords do not match");
    }
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
      const currentUser = firebase.auth().currentUser;
      console.log(currentUser);
    } catch {
      console.log("Failed to make account");
    }
  };

  return (
    <SignUpStyle>
      <Form onSubmit={handleSubmit}>
        <Form.Text className="text-muted">SIGN UP TO GET STARTED</Form.Text>
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
        <Form.Group className="mb-3" controlId="formBasicPasswordConfimation">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            ref={passwordConfirmRef}
            type="password"
            placeholder="Confirm Password"
          />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
        <Button variant="primary" type="submit">
          Sign up
        </Button>
      </Form>
    </SignUpStyle>
  );
};

export default SignUp;
