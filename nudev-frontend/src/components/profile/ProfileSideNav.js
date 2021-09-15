import styled from "styled-components";
import ProfilePicture from "./ProfilePicture";
import { useHistory } from "react-router-dom";

const ProfileSideNav = ({
  profileContent,
  setCurrentTab,
  currentUser,
  logout,
}) => {
  const history = useHistory();

  const handleLogout = () => {
    console.log("GH");
    logout();
    history.push("/auth");
  };

  return (
    <PSNav>
      <PSNProfilePic>
        <ProfilePicture currentUser={currentUser} />
      </PSNProfilePic>
      <PSNavList>
        {profileContent.map((content, idx) => (
          <PSNavItem
            key={`psnavitem-${idx}`}
            href="#title"
            onClick={
              content.title.toLowerCase() === "logout"
                ? () => handleLogout()
                : () => setCurrentTab(content.title)
            }
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
  grid-gap: 1em;
  align-content: space-evenly;
`;
const PSNavItem = styled.button`
  padding: 1em;
  border-radius: 0.2rem;
  text-transform: uppercase;
`;

export default ProfileSideNav;
