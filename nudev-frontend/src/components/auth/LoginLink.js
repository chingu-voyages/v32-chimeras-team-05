import React from "react";
import { FaGoogle } from "react-icons/fa";
import { LoginLinkStyle } from "./LoginLinkStyle";

const ContinueWithBtn = ({ name, color, icon }) => {
  return (
    <LoginLinkStyle color={color}>
      <span className="icon">{icon}</span>
      <span className="line"></span>
      <span className="text">{`Continue with ${name}`}</span>
    </LoginLinkStyle>
  );
};

export default ContinueWithBtn;
