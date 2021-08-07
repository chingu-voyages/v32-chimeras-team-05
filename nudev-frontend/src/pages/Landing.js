import React from "react";
import { LandingHeadline, LandingMain, LandingSearch } from "./LandingStyle";

const Landing = () => {
  return (
    <LandingMain>
      <LandingHeadline>
        <h1>Nudev</h1>
        <h3>The only portal for resources you'll need as a new developer</h3>
        <LandingSearch placeholder="Start by searching here..." />
      </LandingHeadline>
    </LandingMain>
  );
};

export default Landing;
