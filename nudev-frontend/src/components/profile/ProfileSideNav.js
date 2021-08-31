import { Nav } from "react-bootstrap";
import styled from "styled-components";

const ProfileSideNav = ({ profileContent }) => {
  return (
    <>
      <Nav variant="pills" className="flex-column h-100">
        <PSNProfilePic>hello</PSNProfilePic>
        {profileContent.map(({ id, title }) => (
          <Nav.Item key={id}>
            <Nav.Link eventKey={id}>{title}</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </>
  );
};

const PSNProfilePic = styled.div`
  padding: 3em 0;
  min-height: 30vh;
`;

export default ProfileSideNav;
