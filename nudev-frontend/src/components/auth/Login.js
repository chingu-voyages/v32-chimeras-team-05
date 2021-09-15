import React, { useRef, useState } from "react";

import { useAuth } from "../../contexts/AuthContext";
import firebase from "firebase";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { SignUpStyle } from "./SignUpStyle";
import { useHistory } from "react-router-dom";

const Login = ({ showSignUp }) => {
  const { login } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);

    try {
      await login(emailRef.current.value, passwordRef.current.value);
      const currentUser = firebase.auth().currentUser;
      console.log(currentUser);
      history.push("/profile");
    } catch (err) {
      setMessage("Failed to login, please try again. ");
    }
  };

  return (
    <SignUpStyle>
      <Form onSubmit={handleSubmit}>
        <h4 className="text-center mb-5">LOGIN TO GET STARTED</h4>
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

        <Button variant="primary" type="submit">
          {showSignUp ? "sign up" : "login"}
        </Button>
        <Form.Label>{message}</Form.Label>
      </Form>
    </SignUpStyle>
  );
};

export default Login;
