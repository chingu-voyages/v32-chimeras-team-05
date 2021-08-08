import React from "react";
import { useAuth } from "../contexts/AuthContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SignUp from "../components/auth/SignUp";
import LoginLinks from "../components/auth/LoginLinks";
import { AuthMain } from "./AuthPageStyle";

import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const links = [
  {
    name: "Github",
    color: "rgb(9,9,9)",
    icon: <FaGithub />,
  },
  {
    name: "LinkedIn",
    color: "rgb(23,92,172)",
    icon: <FaGoogle />,
  },
  {
    name: "Google",
    color: "rgb(233,89,89)",
    icon: <FaGoogle />,
  },
  {
    name: "Microsoft",
    color: "rgb(46,188,241)",
    icon: <FaGoogle />,
  },
];

const AuthPage = () => {
  // const { signup } = useAuth();
  return (
    <AuthMain>
      <Container>
        <Row>
          <Col>
            <SignUp />
          </Col>
          <Col>
            <LoginLinks links={links} />
          </Col>
        </Row>
      </Container>
    </AuthMain>
  );
};

export default AuthPage;
