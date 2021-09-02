import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LandingHeadline, LandingMain } from "./LandingStyle";
import styled from "styled-components";

const Landing = () => {
  return (
    <LandingMain>
      <LandingHeadline>
        <h1>Nudev</h1>
        <h3>The only portal for resources you'll need as a new developer</h3>
        <StartButton>
          <Button variant="outline-secondary" as={Link} to="/resources">
            Start Here ->
          </Button>
        </StartButton>
      </LandingHeadline>
    </LandingMain>
  );
};

const StartButton = styled.div`
  display: grid;
  justify-content: center;
`;

export default Landing;
