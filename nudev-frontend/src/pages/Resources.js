import React, { useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import ProfilePicture from "../components/resources/ProfilePicture";
import ResourceNav from "../components/resources/ResourceNav";
import Profile from "../components/resources/Profile";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";

import { ResourcesStyle } from "../pages/ResourcesStyle";

const Resources = () => {
  const [resourcesView, SetResourcesView] = useState("Resources");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const handleClick = (e) => {
    const value = e.target.innerHTML;
    if (value === "LOGOUT") {
      logout();
      history.push("/login");
    }
  };

  return (
    <ResourcesStyle>
      <Container fluid>
        <Row>
          <Col className="sideSection" sm={3}>
            <ProfilePicture currentUser={currentUser} />
            <ResourceNav handleClick={handleClick} />
          </Col>
          <Col sm={9}>
            <div className="resourceContainer">
              <Profile />
            </div>
          </Col>
        </Row>
      </Container>
    </ResourcesStyle>
  );
};

export default Resources;
