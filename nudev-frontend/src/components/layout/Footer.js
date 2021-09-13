import React from "react";
import styled from "styled-components";

const NdFooter = styled.footer`
  display: grid;
  justify-content: end;
  align-content: end;
  grid-gap: 1em;
  padding: 0 2em;
`;

const Footer = () => {
  return (
    <NdFooter>
      <p>&copy;2021 Team Chimera05</p>
    </NdFooter>
  );
};

export default Footer;
