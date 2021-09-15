import React, { useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";

import { useAuth } from "../../contexts/AuthContext";
import styled from "styled-components";
import {
  colors,
  PRContainer,
  PRHeader,
  PRButton,
} from "../../styles/SharedStyles";

const Profile = () => {
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const { currentUser, updatePassword, updatePhotoURL } = useAuth();

  const profilePicRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(profilePicRef.current.value);

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      //   return setError("Passwords do not match");
      setError(`Passwords do not match`);
      setTimeout(() => {
        setError(null);
      }, 5000);
      return;
    }
    setError("");
    const promises = [];
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    if (profilePicRef.current.value !== currentUser.photoURL) {
      promises.push(updatePhotoURL(profilePicRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        setMessage("Profile updated");
        setTimeout(() => {
          setMessage(null);
        }, 5000);
      })
      .catch(() => {
        setError("Failed to update account");
        setTimeout(() => {
          setError(null);
        }, 5000);
      });
  };

  return (
    <PRContainer>
      <ProfileStyled>
        <PRHeader>Update Profile:</PRHeader>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formProfilePic">
            <Form.Label>Profile Picture </Form.Label>
            <Form.Control
              ref={profilePicRef}
              type="text"
              placeholder="Enter photo URL"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Update Password</Form.Label>
            <Form.Control
              ref={passwordRef}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="formBasicPasswordConfirmation"
          >
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control
              ref={passwordConfirmRef}
              type="password"
              placeholder="Password Confirmation"
            />
          </Form.Group>
          <PRButton onClick={handleSubmit}>Submit</PRButton>
        </Form>
        <p className="error">{error}</p>
        <p className="message">{message}</p>
      </ProfileStyled>
    </PRContainer>
  );
};

export const ProfileStyled = styled.div`
  width: 100%;
`;

export default Profile;
