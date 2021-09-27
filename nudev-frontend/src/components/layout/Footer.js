import React from "react";
import styled from "styled-components";

const NdFooter = styled.footer`
  display: grid;
  justify-content: center;
  align-content: center;
  padding: 1em;
`;

const Footer = () => {
  return (
    <NdFooter>
      <p>&copy;2021 Team Chimera05</p>
    </NdFooter>
  );
};

export default Footer;
