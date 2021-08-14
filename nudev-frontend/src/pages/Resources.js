import React, { useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import ProfilePicture from "../components/resources/ProfilePicture";
import ResourceNav from "../components/resources/ResourceNav";
import Profile from "../components/resources/Profile";

import { ResourcesStyle } from "../pages/ResourcesStyle";

const Resources = () => {
  const [resourcesView, SetResourcesView] = useState("Resources");
  return (
    <ResourcesStyle>
      <Container fluid>
        <Row>
          <Col className="sideSection" sm={3}>
            <ProfilePicture />
            <ResourceNav />
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
