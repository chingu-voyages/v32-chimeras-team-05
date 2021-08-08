import React from "react";
import LoginLink from "./LoginLink";
import { FaGoogle } from "react-icons/fa";
import { LoginLinkStyle } from "./LoginLinkStyle";

const LoginLinks = ({ links }) => {
  return (
    <div>
      <h1>Test</h1>
      {links.map((link) => (
        <LoginLink
          name={link.name}
          icon={link.icon}
          color={link.color}
          key={link.text}
        />
      ))}
    </div>
  );
};

export default LoginLinks;
