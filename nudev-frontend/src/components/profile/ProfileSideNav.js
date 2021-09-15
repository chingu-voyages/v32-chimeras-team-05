import styled from "styled-components";
import ProfilePicture from "./ProfilePicture";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory, Redirect } from "react-router-dom";

const ProfileSideNav = ({ profileContent, handleDisplayChange }) => {
  const { currentUser } = useAuth();
  console.log("current use pror", currentUser);

  // const handleLogout = () => {
  //   console.log("GH");
  //   logout();
  //   history.push("/auth");
  // };

  if (!currentUser) return <Redirect to="/auth" />;

  return (
    <PSNav>
      <PSNProfilePic>
        <ProfilePicture
          currentUser={currentUser}
          handleDisplayChange={handleDisplayChange}
        />
      </PSNProfilePic>
      <PSNavList>
        {profileContent.map((content, idx) => (
          <PSNavItem
            key={`psnavitem-${idx}`}
            href="#title"
            onClick={(e) => handleDisplayChange(e)}
          >
            {content.title}
          </PSNavItem>
        ))}
      </PSNavList>
    </PSNav>
  );
};

const PSNProfilePic = styled.div`
  display: grid;
  justify-content: center;
  padding-top: 3em;
  min-height: 30vh;
`;

const PSNav = styled.nav`
  display: grid;
  grid-gap: 1em;
  grid-area: sidenav;
  padding: 4em 2em;
`;

const PSNavList = styled.div`
  display: grid;
  align-content: space-evenly;
`;
const PSNavItem = styled.button`
  padding: 0.5em;
  border-radius: 0.2rem;
  text-transform: uppercase;
`;

export default ProfileSideNav;
