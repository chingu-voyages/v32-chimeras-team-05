import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SignUp from "../components/auth/SignUp";
import Login from "../components/auth/Login";
import LoginLinks from "../components/auth/LoginLinks";
import { AuthMain, AuthContainer } from "./AuthPageStyle";

import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa";

const links = [
  {
    name: "Github",
    color: "rgb(9,9,9)",
    icon: <FaGithub />,
  },
  {
    name: "LinkedIn",
    color: "rgb(23,92,172)",
    icon: <FaLinkedin />,
  },
  {
    name: "Google",
    color: "rgb(233,89,89)",
    icon: <FaGoogle />,
  },
  {
    name: "Microsoft",
    color: "rgb(46,188,241)",
    icon: <FaMicrosoft />,
  },
];

const AuthPage = () => {
  const [showSignUp, setShowSignUp] = useState(true);
  const { currentUser } = useAuth();
  console.log(currentUser);

  return (
    <AuthMain>
      <AuthContainer>
        <Container>
          <Row>
            <Col>{showSignUp ? <SignUp /> : <Login />}</Col>
            <Col>
              <LoginLinks
                showSignUp={showSignUp}
                setShowSignUp={setShowSignUp}
                links={links}
              />
            </Col>
          </Row>
        </Container>
      </AuthContainer>
    </AuthMain>
  );
};

export default AuthPage;
