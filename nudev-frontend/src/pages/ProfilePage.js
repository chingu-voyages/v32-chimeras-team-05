import { Col, Tab, Row, Container } from "react-bootstrap";
import styled from "styled-components";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileResources from "../components/profile/ProfileResources";
import ProfileSideNav from "../components/profile/ProfileSideNav";
import { PageMain } from "../styles/SharedStyles";

const profileContent = [
  { id: "123123e3e", title: "Resources" },
  { id: "werwegwef", title: "Comments" },
  { id: "gewf23e3r", title: "Bookmarks" },
  { id: "gr24t23fw", title: "Logout" },
];

const ProfilePage = () => {
  return (
    <PPMain>
      <Tab.Container>
        <Row>
          <Col>
            <ProfileSideNav profileContent={profileContent} />
          </Col>
          <Col lg={9} className="h-100">
            <Tab.Content>
              {profileContent.map(({ id, title }) => (
                <Tab.Pane key={id} eventKey={id}>
                  <ProfileHeader title={title} />
                  <ProfileResources />
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </PPMain>
  );
};

const PPMain = styled(Container)`
  min-height: 85vh;
`;

export default ProfilePage;
