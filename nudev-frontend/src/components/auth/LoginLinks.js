import React from "react";
import LoginLink from "./LoginLink";
import { FaGoogle } from "react-icons/fa";
import { LoginLinksStyle } from "./LoginLinkStyle";

const LoginLinks = ({ showSignUp, setShowSignUp, links }) => {
  return (
    <LoginLinksStyle>
      <h1>{showSignUp}</h1>
      <p onClick={() => setShowSignUp(!showSignUp)} className="link text-muted">
        {showSignUp
          ? "Already have an account? Click here to login"
          : "Don't have an account? Click here to Sign Up"}
      </p>
      <p className="text-muted">Or</p>
      {links.map((link) => (
        <LoginLink
          name={link.name}
          icon={link.icon}
          color={link.color}
          key={link.text}
        />
      ))}
    </LoginLinksStyle>
  );
};

export default LoginLinks;
